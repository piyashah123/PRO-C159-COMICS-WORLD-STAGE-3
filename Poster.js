createPoster: function(item){
    const entityEl= document.createElement("a-entity");
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("geometry",{
        primitive:'plane',
        width:20,
        height:28
    });
    entityEl.setAttribute("position",{x:0 , y:5, z:-0.1})
    entityEl.setAttribute("material",{src : item.url});

    if(selectedItemId){
        fadeBackgroundEl.setAttribute("visible",true);
        fadeBackgroundEl.setAttribute("info-banner",{
            itemId:selectedItemId,
        });
        titleEl.setAttribute("visible",false);
        cursorEl.setAttribute("position",{x:0,y:0,z:0});
        cursorEl.setAttribute("geometry",{
            radiusInner:0.03,
            radiusOuter:0.04,
        });

    } else {
        fadeBackgroundEl.setAttribute("visible",false);
        titleEl.setAttribute("visible",true);
        cursorEl.setAttribute("position",{x:0,y:0,z:-3});
        cursorEl.setAttribute("geometry",{
            radiusInner:0.08,
            radiusOuter:0.12,
        });
    }
    update : function () {
        const fadeBackgroundEl=document.querySelector("#fadeBackground");
        c = fadeBackgroundEl.children;
        if(c.lenght>0){
            var i;
            for (i=0;i<=c.lenght;i++){
                fadeBackgroundEl.removeChild(c[i]);
            }

        } else{
            this.handleMouseClickEvents();
        }

    },
    }
