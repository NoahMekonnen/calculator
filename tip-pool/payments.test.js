describe("Payments test (with setup and tear-down)", function() {
beforeEach(function(){
        billAmtInput.value = 200
        tipAmtInput.value = 50
});

it('should make make a new payment', function(){
    let newPayment = createCurPayment();
    expect(newPayment).toEqual({
        billAmt: '200',
        tipAmt: '50',
        tipPercent: calculateTipPercent(200, 50),
      })
});

it('Should add currPayment to allPayments', function(){
    submitPaymentInfo();
    expect(allPayments['payment1']).toEqual({
        billAmt: '200',
        tipAmt: '50',
        tipPercent: calculateTipPercent(200, 50),
      })
})

it('add new row to payment table', function(){
    let currPayment = createCurPayment();
    submitPaymentInfo();
    const initialRowLength = paymentTbody.rows.length;
    const initialCellLength = paymentTbody.rows[0].cells.length;
    appendPaymentTable(currPayment);
    expect(initialCellLength).toEqual(4);
    expect(initialRowLength+1).toEqual(2);
    
})

it('should show summary of all payments',function(){
    submitPaymentInfo();
    billAmtInput.value = 80;
    tipAmtInput.value = 20;
    submitPaymentInfo();

    updateSummary();
    expect(summaryTds[0].innerHTML).toEqual('$280');
    expect(summaryTds[1].innerHTML).toEqual('$70');
    expect(summaryTds[2].innerHTML).toEqual('25%');
})

afterEach(function(){
    billAmtInput.value = ''
    tipAmtInput.value = ''
    allPayments = {}
    paymentId = 0
})

});

