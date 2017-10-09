#!/bin/bash
echo "Copy files to public..."
cd client
ng build --env=prod
cd ..
rm -rf ./server/public
cp -r ./client/dist ./server/public
echo "Done!"