        $('#email-form').on('submit',function(){
            var name=$('#name').val();
            var mobile=$('#Mobile-Number').val();
            var email=$('#Email').val();
            var designation=$('#Designation').val();
            var location='';
            var org=$('#Organization').val();
            var address=$('#Address').val();
            var loktra_name=$('#Domine').val();
            var request={"name":org,"loktra_name":loktra_name,"organization":org,"location":{"latitude":"", "longitude":""},"address":"","employee_size":"","payment_poc":name,
              "poc_email":email,"poc_mobile":mobile,"poc_designation":designation,
              "source":"WEBSITE"}
            var dataString=JSON.stringify(request);

            $.ajax({
              type:"POST",
              contentType: "application/json",
              url:"https://accounts.loktra.com/api/v1/orgs",
              data:dataString,
              success:function(data)
              {

              },
              error:function(xhr,status,error)
              {

              }
            })
            alert('');
        });
        function domieName()
        {
          var domine=$('#Organization').val();
          var split= domine.split(' ');
          if(split.length>1)
          {
            $('#Domine').val(split[0]);
          }

          if(split.length==1)
          {
            $('#Domine').val($('#Organization').val());
          }
        }

        function nospaces(t){
            if(t.value.match(/\s/g)){
            alert('Sorry, you are not allowed to enter any spaces');

             t.value=t.value.replace(/\s/g,'');
           }
        }