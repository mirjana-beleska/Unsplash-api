    var searchT = "";

    var page = 1;

    $(".btn").on("click", function(){

        searchT = $("#search").val();
        
        makeCall(searchT);
        
        $(".btn").attr("disabled", true);
        
         return false;
        })

    function makeCall(query){
        var api= "https://api.unsplash.com/search/collections?&client_id=dfcd7cde7de0cf5a530099a2b538552faed6112493fd9aafd6e12423085bfe85&page=" + page + "&query=" + query;
        $.getJSON(api ,function(data){
            console.log(data);
            var res = data.results.length;

            if(res == 0){
                alert("no results are found");
            }
            else{
                for(var i=0; i<res; i++){
                    var imgs = data.results[i].cover_photo.urls.small;
                    console.log(imgs);

                    var img = $('<img > ');
                    img.attr("src" , imgs);

                    $(".btn").attr("disabled", false);
                    
                    $("#photos").append(img);
                }
            }
        })
    }























