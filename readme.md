![Atlan-Logo](public/atlan.png)

# Task Manager

User can stop a task at any given point in time, and can choose to resume or terminate it later. The tasks can be to upload a csv file to server or to download a file from server.

## Technology Used

- **Javascript runtime** - Node.js 
- **Backend Framework** - Express.js 
- **Containerization Platform** - Docker

## Installation with Docker

```
# Clone the repository
$ git clone https://github.com/ayushi-bhardwaj/Atlan-Backend-Assignment--Task-Manager.git

# Change the directory
$ cd "Atlan-Backend-Assignment--Task-Manager"

# Build Docker image
$ docker build -t atlan-backend-task .

# Run docker image
$ docker run -p 49160:3000 -d atlan-backend-task
```

## Installation on local machine

```
# Clone the repository
$ git clone https://github.com/ayushi-bhardwaj/Atlan-Backend-Assignment--Task-Manager.git

# Change the directory
$ cd "Atlan-Backend-Assignment--Task-Manager"

# Install all the required dependencies
$ npm install

# Start the application
@ node index.js
```
## APIs

-**Postman Collection** https://documenter.getpostman.com/view/11482194/TVCiSRa4

| REQUEST METHODS |      ENDPOINTS      |                           DESCRIPTION |
| :-------------- | :-----------------: | ------------------------------------: |
| POST            |       /upload       |                  Start Upload process |
| POST            |    /upload/pause    |              Pause the upload process |
| POST            |   /upload/resume    |             Resume the upload process |
| POST            |  /upload/terminate  |          Terminate the upload process |
| POST            |      /download      | Start download process if file exists |
| POST            |   /download/pause   |            Pause the download process |
| POST            |  /download/resume   |           Resume the download process |
| POST            | /download/terminate |        Terminate the download process |

# Output of API Endpoints

- /upload

```
 # If endpoint is hit first time, then upload starts.
 {  Message : Upload Started }
 # Afterwards if upload is in progess
 { Message : Upload in progress}
```

- /upload/pause

```
 # If upload is not started yet.
 {  Message : Upload process has not started yet }
 # Else
 { Message : Upload Paused}
```

- /upload/resume

```
 # If upload is not started yet.
 {  Message : Upload process has not started yet }
 # Else
 { Message : Upload Resumed}
```

- /upload/terminate

```
 # If upload is not started yet.
 {  Message : Upload process has not started yet }
 # Else
 { Message : Upload Terminated}
```

- /download

```
 # If file doesn't exists.
 {  Message : Invalid Request, File doesn't exists }
 # If download is not started yet
 { Message : Download Started}
 # If download is in progress
 { Message : Download in progress }
```

- /download/pause

```
 # If download is not started yet.
 {  Message : Download process has not started yet }
 # Else
 { Message : Dowload Paused}
```

- /download/resume

```
 # If download is not started yet.
 {  Message : Download process has not started yet }
 # Else
 { Message : Dowload Resumed}
```

- /download/terminate

```
 # If download is not started yet.
 {  Message : Download process has not started yet }
 # Else
 { Message : Dowload Terminated}
```
