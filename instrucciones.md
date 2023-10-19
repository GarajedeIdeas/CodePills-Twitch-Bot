https://dev.twitch.tv/console

ID Cliente: 2x66ip61g1puisicdv7ku0wdeko8xm
Secret Key: jch70zq1gmkhbedwbbbcux0s74g3q5

https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=2x66ip61g1puisicdv7ku0wdeko8xm&redirect_uri=http://localhost:3000&scope=chat:read+chat:edit&state=c3ab8aa609ea11e793ae92361f002671

code: 4cf7rwh8ns1baqb49w5675o8zfweoe

curl -X POST 'https://id.twitch.tv/oauth2/token' \
-H 'Content-Type: application/x-www-form-urlencoded' \
-d 'client_id=2x66ip61g1puisicdv7ku0wdeko8xm&client_secret=u0lu7u327bwfee9j8qm2a7rwhg2lwb&code=wc06dmcf7t3ctdtpcfew0cndzcby82&grant_type=authorization_code&redirect_uri=http://localhost:3000'

RESPUESTA
{"access_token":"37gr4cxrkj24rj87s2fvjyb70d43vn","expires_in":15306,"refresh_token":"6ppenuof1ayepmbwhzip21wcew2mgnb8lfz95vftuxy0rh6egi","scope":["chat:edit","chat:read"],"token_type":"bearer"}