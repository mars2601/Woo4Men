/* WOO4MEN
*
* JS Document - /js/script.js
*
* coded by Mars
* started at 09/12/2014
*/


( function( $ ) {

  var addProductLink = $(".infos__add");
  var cartContain = $(".cart--quantity");
  var productTitle = $(".infos__title");
  var productPrice = $(".infos__price");
  var productPres = $(".infos__presentation");



  if(localStorage["product"]){
    var product = JSON.parse(localStorage["product"]);
    console.log("recup"+product);
  }else{
    console.log('ouch');
    var product = [];
  }


  var addProductToMyCart = function(){
    addProductLink.click(function(){
      product.push( [productTitle.text(), productPres.text(), productPrice.text(), "./img/product/chemise-rayee-bleue-business-tomar-blue-a1aqa3R7OE.mini.png"]);
      localStorage["product"] = JSON.stringify(product);
    });
  }
  var deleteProductOfMyCart = function(){
    var deleteProductLink = $(".cart__list__item--delete");
    var tableRow = $("tr");
    tableRow.mouseover(function(e){
      $(this).find(".cart__list__item--delete").show();
    });
    tableRow.mouseout(function(e){
      $(this).find(".cart__list__item--delete").hide();
    });
    deleteProductLink.hide();

    deleteProductLink.on('click', function() {
      product.splice(product.length-1, 1);
      localStorage["product"] = JSON.stringify(product);
      location.reload();
    });
  }
  var ResetNewData = function(){
    // count cart element
    cartContain.text(product.length);

    // populate the cart table
    if($("tbody").length){
      console.log($("tbody"));
      for(var i = 0; i < product.length; i++){
        $("tbody").append( "<tr class=\"layout--flush\"><td class=\"cart__list__item--image cart__list__item layout__item one-quarter\"><img src=\"" + product[i][3] + "\" alt=\"\"></td><td class=\"cart__list__item--desc cart__list__item layout__item one-quarter\">" + product[i][0] + "<span>" + product[i][1] + "</span></td><td class=\"cart__list__item--quantity cart__list__item layout__item one-quarter\"><form action=\"\"><input type=\"number\"></form></td><td class=\"cart__list__item--unitPrice cart__list__item layout__item one-quarter\">" + product[i][2] + "</td><td class=\"cart__list__item--delete\"><span class=\"icon-cancel\"></span></td></tr>");
        // $("tbody").append( "<tr><td class=\"cart__list__item--desc cart__list__item layout__item one-quarter\">"
        // + product.length +"</td></tr>");
      }
    }
    console.log(JSON.parse(localStorage["product"]));

  }


  addProductToMyCart();
  ResetNewData();
  // tableRow.mouseover(function(){
    deleteProductOfMyCart();
  // });

} )( jQuery );
