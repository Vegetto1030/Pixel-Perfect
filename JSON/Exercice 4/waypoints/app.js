var waypoint = new Waypoint({
    element: document.getElementById('second-section'),
    handler: function(direction) {
        if(direction == 'down'){
            alert('Are you sure you want to go there ?')
        }
    },
    offset: '100%'
});



var waypoint = new Waypoint({
    element: document.getElementById('second-section'),
    handler: function(direction) {
        if(direction =='up'){
            alert('I told you')
        }
        },
        offset: '0%'
});
