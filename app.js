

var budgetController = (function () {

})();


var UIController = (function () {
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'        
    }
    return {
        getInput: function() {
            return {
                type : document.querySelector(DOMstrings.inputType).value,
                description : document.querySelector(DOMstrings.inputDescription).value,
                value : document.querySelector(DOMstrings.inputValue).value
            }
        },
        getDOMstrings: function() {
            return DOMstrings;
        }
    };
})();


var controller = (function (budgetCtrl, UICtrl) {
    var DOM = UICtrl.getDOMstrings();
    var ctrlAddItem = function() {
        /// 1. Get the input
        var input = UICtrl.getInput();
        console.log(input);
        /// 2. Add the item to the bufget controller
        /// 3. Add the item to UI controller
        /// 4. Calculate the budget
        /// 5. Display the budget on the UI
    }

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
        
    });

})(budgetController, UIController);