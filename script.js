
      let xhr=new XMLHttpRequest();
      xhr.onreadystatechange=function(){
        if (xhr.readyState==4 && xhr.status==200){
            let json = JSON.parse(xhr.responseText);
            console.log(json);
            for(let repo in json){
              let template=`
                <tr class="repo_row" data-href="${json[repo].html_url}" onclick="window.location=this.dataset.href" >
                  <td>${Number(repo)+1}</td>
                  <td>${json[repo].name}</td>
                  <td>${json[repo].clone_url}</td>
                  <td>${json[repo].description}</td>
                </tr>
              `
              document.getElementById("tbody").innerHTML +=template;

            }
        }
      }
      xhr.open("GET","https://api.github.com/users/Eng-khaledElsaeed/repos",true);
      xhr.send();