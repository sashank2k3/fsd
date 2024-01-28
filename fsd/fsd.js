let pstate = document.querySelector("#pstate")
    let pcity = document.querySelector("#pcity")
    let pzip = document.querySelector("#pzip")
    let pphonenumber = document.querySelector("#pphonenumber")

    let tstate = document.querySelector("#tstate")
    let tcity = document.querySelector("#tcity")
    let tzip = document.querySelector("#tzip")
    let tphonenumber = document.querySelector("#tphonenumber")

    
        var countrySateCityinfo = {
            India: {
                Telangana: {
                    Hyderabad: ["501401", "500001", "500013"],
                    medak: ["502248", "502255", "502110"],
                    warangal: ["506001","506005","506007"]
                },
                AndhraPradesh: {
                    Amaravati: ["444601", "444605","444604"],
                    vizag: ["557733", "554732", "524834"]
                },
                Delhi: {
                    North: ["110001","110022","110034"]

                }
            },
            Australia: {
                "Western Australia": {
                    Broome: ["6725", "6318", "6701"],
                    Coolgardie: ["6429", "6432"]
                },
                Tasmania: {
                    Hobart: ["7000", "7520"],
                    Launceston: ["7250", "7334"],
                    Burnie: ["7320", "7315"]
                }
            },
            Germany: {
                Bavaria: {
                    Munich: ["80331", "80333", "80335"],
                    Numemberg: ["90402", "90403", "90404"]
                },
                Hessen: {
                    Frankfurt: ["60306", "60309", "60310"],
                    Surat: ["55246", "55247", "55248", "55249"]
                }
            }
            
        }
        
        window.onload = function(){
            const selectCountry = document.getElementById('country'),
                selectState = document.getElementById('state'),
                selectCity = document.getElementById('city'),
                selectZip = document.getElementById('zip'),
                selects = document.querySelectorAll('select')
        
                selectState.disabled = true
                selectCity.disabled = true
                selectZip.disabled = true
        
                selects.forEach(select => {
                    if(select.disabled == true){
                        select.style.cursor = "auto"
                    }
                    else{
                        select.style.cursor = "pointer"
                    }
                })
        
                for(let country in countrySateCityinfo){
                    // console.log(country);
                    selectCountry.options[selectCountry.options.length] = new Option(country, country)
                }
        
        
                // country change
                selectCountry.onchange = (e) =>{
                    
                    selectState.disabled = false
                    selectCity.disabled = true
                    selectZip.disabled = true
        
                    selects.forEach(select => {
                        if(select.disabled == true){
                            select.style.cursor = "auto"
                        }
                        else{
                            select.style.cursor = "pointer"
                        }
                    })
        
                    selectState.length = 1
                    selectCity.length = 1
                    selectZip.length = 1
        
                    for(let state in countrySateCityinfo[e.target.value]){
                        // console.log(state);
                        selectState.options[selectState.options.length] = new Option(state, state)
                    }
                }
        
                // state change
                selectState.onchange = (e) =>{
                    selectCity.disabled = false
                    selectZip.disabled = true
        
                    selects.forEach(select => {
                        if(select.disabled == true){
                            select.style.cursor = "auto"
                        }
                        else{
                            select.style.cursor = "pointer"
                        }
                    })
        
                    selectCity.length = 1
                    selectZip.length = 1
        
                    for(let city in countrySateCityinfo[selectCountry.value][e.target.value]){
                        // console.log(city);
                        selectCity.options[selectCity.options.length] = new Option(city, city)
                    }
                }
        
                // change city
                selectCity.onchange = (e) =>{
                    selectZip.disabled = false
        
                    selects.forEach(select => {
                        if(select.disabled == true){
                            select.style.cursor = "auto"
                        }
                        else{
                            select.style.cursor = "pointer"
                        }
                    })
                    
                    selectZip.length = 1
        
                    let zips = countrySateCityinfo[selectCountry.value][selectState.value][e.target.value]
                    
                    for(let i=0; i<zips.length; i++){
                        selectZip.options[selectZip.options.length] = new Option(zips[i], zips[i])
                    }
                }
        }

