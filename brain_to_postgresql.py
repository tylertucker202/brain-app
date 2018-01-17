#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Sep 23 09:29:45 2017

@author: tyler
"""
import os
import numpy as np
import nibabel as nib
import json
np.set_printoptions(precision=2, suppress=True)
from sqlalchemy import create_engine
import pandas as pd
import pdb
import datetime


#pdb.set_trace()

def create_brain_array(brain_it, aal_it):
    brainArray = []
    vertex=0
    while not brain_it.finished:
        if brain_it[0]==0:
            brain_it.iternext()
            aal_it.iternext()
            continue
        pointDict = dict()
        pointDict['vertexNumber'] = vertex
        pointDict['x'] = int(brain_it.multi_index[0])
        pointDict['y'] = int(brain_it.multi_index[1])
        pointDict['z'] = int(brain_it.multi_index[2])
        pointDict['color'] = int(brain_it[0])
        pointDict['catagory'] = int(aal_it[0])

        brainArray.append(pointDict)
        vertex += 1
        brain_it.iternext()
        aal_it.iternext()
    return brainArray      


#try out sqllite
def save_brain(df):
    engine = create_engine('postgresql://postgres:postgres@localhost:5432/brain')
    start = datetime.datetime.now()
    df.to_sql('braintbl', engine)
    end = datetime.datetime.now()
    delta = end-start
    print('seconds it took to add: {0}, {1}'.format(delta.seconds, 'wow!')) # it took 2 seconds

#load

if __name__ == '__main__':
    #load brain data as df
    ch2bet = os.path.join(os.getcwd(), 'BrainDataHarvard-SDSU', 'ch2bet.nii')
    ch2bet_img = nib.load(ch2bet)
    ch2bet_data = ch2bet_img.get_data()
    brain_it = np.nditer(ch2bet_data, flags=['multi_index'])
    
    #load brain aal atlas as df
    aal = os.path.join(os.getcwd(), 'BrainDataHarvard-SDSU', 'aal.nii')
    aal_img = nib.load(aal)
    aal_data = aal_img.get_data()
    aal_it = np.nditer(aal_data, flags=['multi_index'])
    
    brainArray = create_brain_array(brain_it, aal_it)
    df = pd.DataFrame(brainArray)
    save_brain(df)

    
    
    
