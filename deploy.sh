#!/bin/bash

export BASEPROY=zk-url-shortener
export ALF_HOME=/opt/alfresco52e

# Compile and generate repo AMP
cd ${BASEPROY}-repo
mvn clean -Ppurge
mvn package -DskipTests=true

# Compile and generate repo AMP
cd ../${BASEPROY}-share
mvn clean -Ppurge
mvn package -DskipTests=true

# Copy AMPs
cd ..
cp ${BASEPROY}-repo/target/*.amp ${ALF_HOME}/amps
cp ${BASEPROY}-share/target/*.amp ${ALF_HOME}/amps_share

cd ${ALF_HOME}

# Stop Alfresco
sh alfresco.sh stop

# Apply amps
./bin/apply_amps.sh

# Start Alfresco
sh alfresco.sh start