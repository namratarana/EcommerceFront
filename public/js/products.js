$(".add-to-cart").click(function(event) {
            event.preventDefault();
            var name = $(this).attr("data-name");
            var price = Number($(this).attr("data-price"));
            //var image = $(this).attr("data-image");

            addItemToCart(name, price, 1);
            displayCart();
        });

        $("#clear-cart").click(function(event) {
            clearCart();
            displayCart();
        })

        $(".delete-item").click(function(event) {     
            removeItemfromCart(name);
            
            
        
            
            displayCart();
        })

        $("#cart").click(function(event){
            //addItemToCart(name, price, 1);
            displayCart();
        })


        function displayCart() {
            var cartArray = listCart();
            var output = "";
            for (var i in cartArray) {
                output += "<tr><td tabindex='1'>"+cartArray[i].name + "</td><td tabindex='1'>" +"  <button class='btn btn-primary text-justify plus-item' data-name='"+cartArray[i].name+"'>+</button>"+cartArray[i].count + "  <button class='btn btn-primary text-justify subtract-item' data-name='"+cartArray[i].name+"'>-</button>"+ "</td><td tabindex='1'>"+ cartArray[i].price + "</td><td>" + "<button  tabindex='1' class='btn btn-default btn-sm delete-item' data-name='" + cartArray[i].name  +"'>Remove</button>" + "</td></tr>";
            }
            $("#show-cart").html(output);
            $("#total-cart").html(totalCart());
        }

        $("#show-cart").on("click", ".delete-item", function(event) {
            var name = $(this).attr("data-name");
            removeItemFromCartAll(name);
            displayCart();
        })

        $("#show-cart").on("click",".subtract-item",function(event){
            var name=$(this).attr("data-name");
            removeItemfromCart(name)
            displayCart();
        })

        $("#show-cart").on("click",".plus-item",function(event){
            var name=$(this).attr("data-name");
            addItemToCart(name,0,1);
            displayCart();
        })

        //*******************************8
        var cart = [];

        var Item = function(name, price, count) {
            this.name = name;
            this.price = price;
            this.count = count;
        };

        function addItemToCart(name, price, count) {
            for (var i in cart) {
                if (cart[i].name === name) {
                    cart[i].count += count;
                    saveCart();
                    return;
                }
            }

            var item = new Item(name, price, count);
            cart.push(item);
            saveCart();
            displayCart();

        }


        /*addItemToCart("apple",1.22,1);
			addItemToCart("pear",12,1);
			addItemToCart("apple",1.22,1);
			addItemToCart("apple",1.22,3);*/

        //console.log(cart);

        function removeItemfromCart(name) {
            for (var i in cart) {
                if (cart[i].name === name) {
                    cart[i].count--;
                    if (cart[i].count === 0) {
                        cart.splice(i, 1);
                        //$(".modal-body").hide();
                    }
                
                    break;
                }
                    
            }
                
    
            
            saveCart();
        }
       

        function removeItemFromCartAll(name) {
            for (var i in cart) {
                if (cart[i].name === name) {
                    cart.splice(i, 1);
                    break;
                }
            }
            saveCart();
        }

        

        function clearCart() {
            cart = [];
            saveCart();
        }

        //clearCart();
        //console.log(cart);

        function countCart() {
            var totalCount = 0;
            for (var i in cart) {
                totalCount += cart[i].count;
            }
            return totalCount;
        }

        console.log(countCart());

        function totalCart() {
            var totalCost = 0;
            for (var i in cart) {
                totalCost += cart[i].price * cart[i].count;
            }
            return totalCost.toFixed(2);
        }

        console.log(totalCart());

        function listCart() {
            var cartCopy = [];
            for (var i in cart) {
                var item = cart[i];
                var itemCopy = {};
                for (var p in item) {
                    itemCopy[p] = item[p];
                }
                itemCopy.total = (item.price * item.count).toFixed(2);
                cartCopy.push(itemCopy);
            }
            return cartCopy;
        }

       

        function saveCart() {
            localStorage.setItem("shoppingCart", JSON.stringify(cart));
        }

    

        function loadCart() {
            cart = JSON.parse(localStorage.getItem("shoppingCart"));
        }

        loadCart();

        var array = listCart();
        console.log(array);
