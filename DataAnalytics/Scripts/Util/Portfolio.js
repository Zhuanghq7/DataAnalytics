﻿//@{
//    ViewBag.Title = "Portfolio";
//    if(ViewBag.username == null && ViewBag.password == null) {
//        <script>
//            alert("please sign in first");
//            location.href = "/";
//        </script>
//    }
//}
/*
 * judge if sign in 
 */
var portfolioList = [];

$(document).ready(
    function(){
        //askAllPortfolioObjects();
        refreshDataTable();

    }

);

function refreshDataTable() {
    $('#portfolios_table').DataTable({
        
        columns: [{
            data: 'portfolioLink',
            title: 'portfolioName',
        }, {
            data: 'from',
            title: 'from',
        }, {
            data: 'to',
            title:'to',
        }
        ],
        data: portfolioList
    });
}
function askAllPortfolioObjects() {
    //call this function will page load
    $.ajax({
        type: "POST",
        url: "/home/readPortfolio",
        dataType: "json",
        contentType: "application/json",
        success: function (result) {
            console.log(result); //this result will be a signle json object which contain '''errmsg''' or '''data''' which contain a list of portfolio objects
            if (result.errmsg != null) {
                alert('readDataError');
            } else {
                //put the data into datatable or store it in an global var I think.
                //show
                for(port in result.data){
                    portfolioList.push({
                        portfolioname: port.portfolioname,
                        from: port.from,
                        to: port.to,
                        portfolioID: port.portfolioID,
                        portfolioLink: "<a href= /home/detail?portfolioId=" + port.portfolioID + ">" + result.data.portfolioname + "</a>"
                    });
                }
                refreshDataTable();

            }
        },
        error: function (error) {
            alert("There was an error posting the data to the server: " + error.responseText);
        }
    });
    return false;
}


function goSummary() {
    location.href = '/home/summary'
}

/*
 * to use function here, you need to create your own onClickDetail function and get the specific portfolio user click and get its Id,
 * then use the Id call below function will work well
 */
function goDetail(portfolioId) {
    location.href = '/home/detail?portfolioId=' + portfolioId;
}





function ShowPortFolio() {
    $.ajax({
        type: 'Get',
        url: "#",
        error: function (msg) {
            alert(msg);
        },
        success: function (data) {

            var portfoliosList = eval(data);
            var list = getElementsByClassName("first")[0];

        }

    }

    )

}

