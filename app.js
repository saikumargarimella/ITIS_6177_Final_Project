var express = require('express');
var app = express();
var axios = require('axios');
var cors = require('cors');
app.use(express.json());
var port = 3000;
var key = 'key';
const ocr = "OCR";
var analyze = "Analyze";
var describe = "Describe";
app.use(express.urlencoded({extended: true}));
app.post('/ocr', (req,res)=>{
    var url = req.body.url;
    axios({
        method: 'post',
        url: ocr,
        data: {
          url: url
        },
        headers: { 'Ocp-Apim-Subscription-Key': key }
      }).then(function (response) {
          res.send(response.data);
    }).catch(function (error) {
        console.log(error)
    });
    });

    app.post('/analyze', (req,res)=>{
        var url = req.body.url;
       axios({
            method: 'post',
            url: analyze,
            data: {
              url: url
         
            },
            headers: { 'Ocp-Apim-Subscription-Key': key }
          }).then(function (response) {
              res.send(response.data);
        }).catch(function (error) {
            console.log(error)
        });
        });

app.post('/describe', (req,res)=>{
            var url = req.body.url;            
            axios({
                method: 'post',
                url: describe,
                data: {
                  url: url
             
                },
                headers: { 'Ocp-Apim-Subscription-Key': key }
                 
              }).then(function (response) {
                
                 
                  res.send(response.data);
            }).catch(function (error) {
                console.log(error)
                
            });
            });

            
    app.listen(port, () => {
        console.log(`app listening at http://localhost:${port}`);
        });
    
