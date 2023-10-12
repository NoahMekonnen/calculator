describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });
  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('It should create a table row element and pass to appendTd function with input value', function(){
    const initial = serverTbody.rows.length;
    allServers['server 1'] = 'Alice';
    updateServerTable();
    expect((serverTbody.rows.length)).toEqual(initial+1);
  })

  afterEach(function() {
    // teardown logic
      serverId = 0;
      serverTbody.innerHTML = '';
      allServers = {};
  });

});