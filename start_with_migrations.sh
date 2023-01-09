#!/bin/bash

set -ex
npx prisma migrate deploy
npm run start