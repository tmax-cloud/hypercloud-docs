#!/bin/bash

echo "excuted create_symlink"

for symname in "images" "modules"
do
    for f in $(find . -type f -name $symname)
    do
        pushd $(dirname $f)
        rm -f $f
        ln -sf ../$symname $symname
        echo "$f symlink created."
        popd
    done
done
