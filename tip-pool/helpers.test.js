describe('testing all helper functions', function(){
beforeEach(function(){
    billAmtInput.value = 50;
    tipAmtInput.value = 20;
});

it('sums up all the tips, bills, and tip percents ', function(){
    submitPaymentInfo();
    billAmtInput.value = 40;
    tipAmtInput.value = 10;
    submitPaymentInfo();
    expect(sumPaymentTotal('billAmt')).toEqual(90);
    expect(sumPaymentTotal('tipAmt')).toEqual(30);
    expect(sumPaymentTotal('tipPercent')).toEqual(65)
});

it('calculates tip percent',function(){
    expect(calculateTipPercent(100,50)).toEqual(50);
})

it('adds a td with given value to the table row', function(){
    let newTr = document.createElement('tr');
    appendTd(newTr,'5');
    expect(newTr.cells[0].innerText).toEqual('5');
})

afterEach(function(){
    billAmtInput.value = ''
    tipAmtInput.value = ''
    allPayments = {}
    paymentId = 0
})

});