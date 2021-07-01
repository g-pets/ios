"use strict"

import { systemSettings } from '~/store/systemSettings'
import { useRouter } from 'vue-router'



function activityWatcher(){
    const router = useRouter()
    let secondsSinceLastActivity = 0 // The number of seconds that have passed since the user was active
    let maxInactivity = (60 * systemSettings.lockTime)

    setInterval(function(){
        secondsSinceLastActivity++
		console.log(secondsSinceLastActivity)
        //if the user has been inactive or idle for longer then the seconds specified in maxInactivity
        if(secondsSinceLastActivity > maxInactivity) {
			console.log('Go To lockscreen')
			router.push({name:'lockScreen'})
        }
    }, 1000)

    function activity(){
        secondsSinceLastActivity = 0 //reset the secondsSinceLastActivity variable
    }

    // An array of DOM events that should be interpreted as user activity
    var activityEvents = ['mousedown', 'mousemove', 'keydown', 'scroll', 'touchstart']

    // Register the activity function as the listener parameter
    activityEvents.forEach(function(eventName) {
        document.addEventListener(eventName, activity, true)
    })
}

export { activityWatcher }