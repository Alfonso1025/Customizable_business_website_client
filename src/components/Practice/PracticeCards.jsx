import React from "react"
import '../../Pages/PracticeAreas/PracticeAreas.css'
import { AiFillGithub } from 'react-icons/ai';

function PracticeCard(props){

//recibe props
const title = props.title
const setIsOpenArea = props.setIsOpenArea
const descript = props.descript
const list = props.areaList
const setAreaDescription = props.setAreaDescription
const setAreaList = props.setAreaList
const setAreaTitle = props.setAreaTitle
const dataTestId = props.dataTestId



//function definition
const openArea = ()=>{
    setIsOpenArea(true)
    console.log('function called')
    setAreaDescription(descript) 
    setAreaList(list)
    setAreaTitle(title)
    console.log('this is the title',title)
    console.log('this is the descript', descript)
 
 }



return(
    

    <div data-testid = {dataTestId} title ='card-main'  className="card-main" onClick={openArea}>
            
        <h2 title = 'card-title' className="card-title">{title}</h2>
                
    </div>
  


    )
}

export default PracticeCard