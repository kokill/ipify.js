const nock = require('nock');
const test = require('ava');
const net = require('net');
const {ipv4, ipv6} = require('./lib/index');

const scope = nock('https://api6.ipify.org')
  .get('/')
  .reply(200, 'd64d:387b:be1d:28cf:d1b5:c2d7:b6e2:829d')

test('isipv4 server', async t => {
	const ip = await ipv4();
	t.true(net.isIPv4(ip));
});

test('isipv6 server', async t => {
	const ip = await ipv6();
	t.true(net.isIPv6(ip));
});

test('Custom IP api', async t => {
	const body = await ipv6("https://postman-echo.com/ip");
	const { ip } = JSON.parse(body);
	t.true(net.isIPv4(ip));
});
