# Nodejs Docker Container


## Building Docker container
`
docker build -t muriminjue/demoapp .
`

Tag "-t" to assign image a name tag
Add "." or local file locations for where the app files are contained


## Docker run command
`
docker run -p 5000:8000 
`

port order is local-port:docker-port

## Docker compose 
creates multiple containers ecessary for the same app