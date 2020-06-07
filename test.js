const xhrMock = require('xhr-mock');
const test = require('ava');
const validator = require('validator');
const {ipv4, ipv6} = require('./index');

const { default: mock,proxy } = xhrMock;

test('isipv4 server', async t => {
	const ip = await ipv4();
	t.true(validator.isIP(ip));
});

test('isipv6 server', async t => {
	const ip = await ipv6();
	t.true(validator.isIP(ip));
});
test('isipv4 browser', async t => {
	mock.setup()
	mock.use(proxy)
	const ip = await ipv4();
	t.true(validator.isIP(ip));
});

test('isipv6 browser', async t => {
	mock.setup();
	mock.use(proxy);
	const ip = await ipv6();
	t.true(validator.isIP(ip));
});

test('Custom IP api', async t => {
	const body = await ipv6("https://postman-echo.com/ip");
	const { ip } = JSON.parse(body);
	t.true(validator.isIP(ip));
});
