#! /bin/bash

#clients
mogrify -format png -quality 70 -thumbnail 160x70 -path final/ original/clients*/*

#services
mogrify -format jpg -quality 65 -thumbnail 400x400 -path final/ original/services/*

#brands
mogrify -format png -quality 70 -thumbnail 200x40 -path final/ original/brands/*

#other pictures
mogrify -format jpg -quality 65 -thumbnail 1920x1080 -path final/ original/ensenada/ensenada4*
mogrify -format jpg -quality 65 -thumbnail 1920x1080 -path final/ original/other/work-meeting*
mogrify -format jpg -quality 65 -thumbnail 800x1080 -path final/ original/ensenada/ensenada2*
