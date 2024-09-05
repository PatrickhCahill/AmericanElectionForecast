// $(document).ready(function(){
//     $('.btn-group button').on('click', function() {
//         $('.btn-group button').removeClass('btn-selected');
//         $(this).addClass('btn-selected');
        
//         var graph = $(this).attr('id');
//         var iframe_id = graph.slice(0,-2)
//         var src = '';
//         switch (graph) {
//             case 'win_ev_pv_1':
//                 src = 'assets/win_probs.html';
//                 break;
//             case 'win_ev_pv_2':   
//                 src = 'assets/ev_plot.html';
//                 break;
//             case 'win_ev_pv_3':
//                 src = 'assets/popular_votes.html';
//                 break;
            
//                 case 'ev_gap_1':
//                 src = 'assets/popular_probs.html';
//                 break;
//             case 'ev_gap_2':   
//                 src = 'assets/ec_gap.html';
//                 break;
//             case 'ev_gap_3':   
//                 src = 'assets/mismatch_probs.html';
//                 break;
//             }

//         $(`#${iframe_id}`).attr('src', src);
//     });
// });

$(document).ready(function(){
    // Event handler for the first button group
    $('.btn-group-1 button').on('click', function() {
        $('.btn-group-1 button').removeClass('btn-selected');
        $(this).addClass('btn-selected');
        
        var graph = $(this).attr('id');
        var iframe_id = graph.slice(0,-2);
        var src = '';
        switch (graph) {
            case 'win_ev_pv_1':
                src = 'assets/win_probs.html';
                break;
            case 'win_ev_pv_2':   
                src = 'assets/ev_plot.html';
                break;
            case 'win_ev_pv_3':
                src = 'assets/popular_votes.html';
                break;
        }

        $(`#${iframe_id}`).attr('src', src);
    });

    // Event handler for the second button group
    $('.btn-group-2 button').on('click', function() {
        $('.btn-group-2 button').removeClass('btn-selected');
        $(this).addClass('btn-selected');
        
        var graph = $(this).attr('id');
        var iframe_id = graph.slice(0,-2);
        var src = '';
        switch (graph) {
            case 'ev_gap_1':
                src = 'assets/popular_probs.html';
                break;
            case 'ev_gap_2':   
                src = 'assets/ec_gap.html';
                break;
            case 'ev_gap_3':   
                src = 'assets/mismatch_probs.html';
                break;
        }

        $(`#${iframe_id}`).attr('src', src);
    });

    $("#us_cartogram").on('load',function(){
        console.log(this.contentDocument)
    })

});

// var us_cartogram = document.getElementById("us_cartogram");

// us_cartogram.onload = function() {
//     var svgDoc = us_cartogram.contentDocument; // Access the SVG document

//     if (svgDoc) {
//         var paths = svgDoc.querySelectorAll('path');

//         for(let i=0; i<paths.length; i++){
//             var path = paths[i]
//             if(path.getAttribute('inkscape:label').includes('ca-')){
//                 path.style.fill = "blue"; // Green color
//             }
//         }
//     } else {
//         console.log('Failed to access the SVG document.');
//     }
// };