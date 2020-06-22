# Oxygen Mask

_In the event of a loss of Airtable pressure from the cabin, oxygen masks will descend._

![](oxygenmask.jpg)

```sh
# install it
deno install --allow-read --allow-write --allow-net=api2.hackclub.com --unstable index.js

#run it
oxygen-mask API_TOKEN BASE/TABLE_1 BASE/TABLE_2
#ex.
oxygen-mask key1123t7192 hack.af/Log hack.af/Links
```