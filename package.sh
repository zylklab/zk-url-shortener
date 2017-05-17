#!/bin/bash
export BASEPROY=zk-url-shortener

# Compile and generate repo AMP
cd ${BASEPROY}-repo
mvn clean -Ppurge
mvn package -DskipTests=true

# Compile and generate repo AMP
cd ../${BASEPROY}-share
mvn clean -Ppurge
mvn package -DskipTests=true

cd ..
