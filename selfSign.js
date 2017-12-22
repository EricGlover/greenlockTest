/*
notes on self-signing certs
resources :
https://www.digitalocean.com/community/tutorials/openssl-essentials-working-with-ssl-certificates-private-keys-and-csrs
https://devcenter.heroku.com/articles/ssl-certificate-self
stormy-shelf-81243.herokuapp.com/



//generate csr 
openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 -out certificate.pem

*/
