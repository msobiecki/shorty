#!/bin/sh
npm run db:migrate:undo:all
npm run db:migrate
npm run start
