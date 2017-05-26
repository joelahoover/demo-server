#!/bin/sh
#
# Run this shell script from the root of the project
#

# Setup local variables
export NMV_DEMO_RESOURCE_SERVER="http://localhost:8010/"

# Start the server
if [ $1 = "forever" ]; then
	echo "Running forever"
	forever -w --watchDirectory="$PWD" server.js
else
	npm start
fi
