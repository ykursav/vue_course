# Important notes
Computed property -> If you want to compute some data
Watcher -> Use if you want to trigger something in case of changes

Refs
VirtualDOM
Lifecycle:                                                                      updated()
beforeCreate()                                                                   |
created() -->compile template                              beforeUpdate()
beforeMount()          <------|                                            |
mounted() ----> Mounted vue instance ---- > Data changed
                                              | 
                                              |
                                    Instance unmounted --->beforeUnmount() --> unmounted()



