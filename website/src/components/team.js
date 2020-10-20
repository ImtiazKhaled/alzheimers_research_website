import * as React from 'react'
import awaj from "../assets/img/awaj.png"
import Israel from "../assets/img/isreal.png"
import bj from "../assets/img/bj.png"
import imtiaz from "../assets/img/imtiaz.png"
import hoang from "../assets/img/hoang.png"
import {Card, StyledBody, StyledAction} from 'baseui/card'
import {Button} from 'baseui/button'
import { SiGithub, SiLinkedin } from "react-icons/si"
import "./Box.css"

const TeamCard = (props) => {

  const { member } = props

  return (
    <Card
      overrides={{Root: {style: {width: '328px'}}}}
      headerImage={member.image}
      title={member.title}
    >
      <StyledBody>
        {member.text}
      </StyledBody>
      <StyledBody>
        {member.title}
      </StyledBody>
      <StyledAction>
        <Button 
          className="outreach-button" 
          startEnhancer={SiGithub} 
          onClick={() => window.open(member.github, "_blank")}
        />
        <Button 
          className="outreach-button" 
          startEnhancer={SiLinkedin} 
          onClick={() => window.open(member.linkedin, "_blank")}
        />
      </StyledAction>
    </Card>
  ) 
}

const Team = () => {
  
  const teamMembers = [
    {image: imtiaz,title:"Imtiaz Khaled",text:"Developer",linkedin:"https://www.linkedin.com/in/imtiazkhaled/",github:"https://github.com/ImtiazKhaled"},
    {image: Israel,title:"Israel Tshitenge",text:"Developer",linkedin:"https://www.linkedin.com/in/israel-tshitenge-07749012b/",github:"https://github.com/tisral"},
    {image: bj,title:"Bijay Parajuli",text:"Developer",linkedin:"https://www.linkedin.com/in/bijay-parajuli-2002a7143/",github:"https://github.com/Bijay1parajuli"},
    {image: hoang,title:"Hoang Luu",text:"Developer",linkedin:"https://www.linkedin.com/in/hoangluu0/",github:"https://github.com/hoangluu404"},
    {image: awaj,title:"Aawaj Bhaukajee",text:"Developer",linkedin:"https://www.linkedin.com/in/aawaj-bhaukajee-b7065ab1/",github:"https://github.com/aawajBhaukajee"},
  ]

  return <div className = "grid"> { teamMembers.map((member) => <TeamCard member={member} />)} </div>
}

export default Team


