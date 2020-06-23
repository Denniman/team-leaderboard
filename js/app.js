const BASE_URL = "https://next.json-generator.com/api/json/get/4Jb82E9T_";

const tableBody = document.querySelector('tbody')

const baseColors = `#CF36E3 #E3CF36 #3636E3 #59C36A #4175DF #18A66C #F0381B #36E67F #65E336 #36E3D6 #A41324 #BC8034 #685B50 #DE5456 #483348 #3A015C #4F0147 #2A9D8F #E76F51 #3A86FF #FF006E #FFBE0B #3A0CA3 #7209B7`
const COLORS = [...baseColors.repeat(3).split(' ')]



const getUsers = async () => {
    const response = await fetch(BASE_URL)

    const users = await response.json()

    tableBody.innerHTML = generateUserCard(users.sort((a, b) => b.totalPoints - a.totalPoints))
}

const generateUserCard = (users) => {
    return users.map((user, index) => `
<tr class="pt-5 mt-5">
    <td>
        <p>${++index}</p>
    </td>
    <td class="border-bar" style="border-left: 5px solid ${COLORS[index]} !important;">
        <img src=${user.image} alt="" class="float-left mr-2"
            style="width: 70px; height: 70px; border: ${index <= 3 && '3px dotted #CF36E3'}"/>
        <p class="text-capitalize" ${index <= 3 && 'style="color:#CF36E3"'}>${user.fullName}</p>
    </td>
    <td>
        <p class="text-capitalize" ${index <= 3 && 'style="color:#CF36E3"'}>@${user.slackId}</p>
    </td>
    <td>
        <p class="text-capitalize"${index <= 3 && 'style="color:#CF36E3"'}>${user.track}</p>
    </td>
    <td>
        <p class="text-capitalize"${index <= 3 && 'style="color:#CF36E3"'}>${user.totalPoints}</p>
    </td>
</tr>
<br/>
`).join("")
}


getUsers()