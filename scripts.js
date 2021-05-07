const today = document.getElementById('today')
        today.valueAsDate = new Date()


        const tableRef = document.getElementById("table").getElementsByTagName('tbody')[0];
        const row = ` <tr>
                <td class="desc"><input type="text"></td>
                <td class="quantity"><input type="number" value="1" onkeyup="calculate()"></td>
                <td class="price"><input type="number" onkeyup="calculate()"></td>
                <td class="value"><input type="number" readonly></td>
                <td><button type="button" onclick="deleteRow(this)" class="delete">X</button></td>
            </tr> `;
        
        function addService(){
            const newRow = tableRef.insertRow(tableRef.rows.length);
            newRow.innerHTML = row;
       }

       function deleteRow(element){
            let index = element.parentElement.parentElement.rowIndex;
            tableRef.deleteRow(index);
       }

       
       function calculate () {
        for (let i = 1; i < tableRef.rows.length; i++) {
            //console.log(tableRef.rows[i].cells[1].getElementsByTagName("input")[0].value);
            const localRow = tableRef.rows[i]
            const quantity = localRow.cells[1].getElementsByTagName("input")[0].value
            const price = localRow.cells[2].getElementsByTagName("input")[0].value
            localRow.cells[3].getElementsByTagName("input")[0].value = quantity * price
            // total.value += localRow.cells[3].getElementsByTagName("input")[0].value
            }           
        }

        const total = document.getElementById("total");
        function getTotal (){
            total.value = 0
            for (let i = 1; i < tableRef.rows.length; i++) {
                let totalInt = parseInt(total.value)
                total.value= totalInt + parseInt(tableRef.rows[i].cells[3].getElementsByTagName("input")[0].value)
            }
        }

        const buttons = document.getElementsByTagName('button')
        function print(){
            for(let i =0;i < buttons.length; i++){
                buttons[i].classList.add('invisible');
            }
            window.print();
        }

        function enableButtons(){
            const hiddenButtons = document.querySelectorAll('.invisible');
            for(let i = 0; i < hiddenButtons.length; i++){
                hiddenButtons[i].classList.remove('invisible')
            }
        }
       