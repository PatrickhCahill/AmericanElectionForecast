#!/bin/bash
jupyter execute src/polling_vals.ipynb 
jupyter execute src/model_and_plots.ipynb
jupyter execute src/polling_vals

git add -A
git commit -m "Daily update"
git push