import React, { useState } from 'react';

import { BsFilter, BsSortDown } from 'react-icons/bs';
import { BiCommentDetail } from 'react-icons/bi';
import { FiLink2 } from 'react-icons/fi';
import { RxCross1 } from 'react-icons/rx';


const Tab = ({ title,content}) => (
    
  <div className='tab-content'>
    <h3>{title}</h3>
    <ul>
      {content.map((item, index) => (
           <div key={index} className='card pin-card'>
           <div className='first-div'>
               <span  className={`title ${item.title==='DW4RTeam' ? 'd4':''} ${
                     item.title === "ContactRM" ? "contact" : "agent"
                   }`} >{item.title}</span>
               <span>{item.icon}</span>

           </div>
           <h3>{item.todo}</h3>
           <div className='lines'>
               <span className={item.class1}></span>
               <span className={item.class2}></span>
           </div>
           <div className='icons-div'>
               <span>{item.icon1}</span>
               <span>{item.commentIcon}</span>
               <span>{item.no}</span>
               <span>{item.icon2}</span>
               <span>{item.rating}</span>
               <span>{item.link}</span>
               <span>{item.count}</span>
           </div>
           <div className="bottom-div">
                 <span className="date">{item.date}</span>
                 <img className="image" src={item.profile}></img>
               </div>
               <div className='tab-bottom'>
                <img className='image' alt='asar' src={item.profile}></img>
                <span>{item.desc}</span>
               </div>


         </div>
        
        
       
      ))}
    </ul>
  </div>
);

const Tabs = ({ tabs, control }) => {
    console.log(control)
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className='tab-parent pin-div'>
        <div className='ul-parent'>
      <ul className='ul'>
        {tabs.map((tab, index) => (
          <li
          
            key={index}
            
            onClick={() => setSelectedTab(index)}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <RxCross1 onClick={control} />
      </div>
      <Tab title={tabs[selectedTab].title} content={tabs[selectedTab].content} />
    </div>
  );
};

const Aman = ({handle}) => {
   
    


  const tabs =[
    {
        title:'Archieved',
        content:[
            {id:1,
                        
                        
                        
                title:'ContactRM',
                todo:'Design a Website',
                
                icon1:<BsFilter/>,
                commentIcon: <BiCommentDetail/>,
                no:'12',
                icon2: <BsSortDown/>,
                rating: '8/9',
                link:<FiLink2/>,
                count:'2',
                date:'created 3 days ago',
                profile:'pic.jpg',
                class1:'line-1',
                class2:'line-2',
                desc: 'Archieved in completed 3 days ago'
        
        
        
        

            },
            {id:2,
                        
                        
                        
                title:'ContactRM',
                todo:'Design a Website',
                
                icon1:<BsFilter/>,
                commentIcon: <BiCommentDetail/>,
                no:'12',
                icon2: <BsSortDown/>,
                rating: '8/9',
                link:<FiLink2/>,
                count:'2',
                date:'created 3 days ago',
                profile:'pic.jpg',
                class1:'line-1',
                class2:'line-2',
                desc: 'Archieved in completed 3 days ago'
        
        
        
        

            },
            {id:3,
                        
                        
                        
                title:'ContactRM',
                todo:'Design a Website',
                
                icon1:<BsFilter/>,
                commentIcon: <BiCommentDetail/>,
                no:'12',
                icon2: <BsSortDown/>,
                rating: '8/9',
                link:<FiLink2/>,
                count:'2',
                date:'created 3 days ago',
                profile:'pic.jpg',
                class1:'line-1',
                class2:'line-2',
                desc: 'Archieved in completed 3 days ago'
        
        
        
        

            },
            {id:4,
                        
                        
                        
                title:'ContactRM',
                todo:'Design a Website',
                
                icon1:<BsFilter/>,
                commentIcon: <BiCommentDetail/>,
                no:'12',
                icon2: <BsSortDown/>,
                rating: '8/9',
                link:<FiLink2/>,
                count:'2',
                date:'created 3 days ago',
                profile:'pic.jpg',
                class1:'line-1',
                class2:'line-2',
                desc: 'Archieved in completed 3 days ago'
        
        
        
        

            },

        ]
    },
    {
        title:'Snozeed',
        content:[
            {id:1,
                        
                        
                        
                title:'ContactRM',
                todo:'Design a Website',
                
                icon1:<BsFilter/>,
                commentIcon: <BiCommentDetail/>,
                no:'12',
                icon2: <BsSortDown/>,
                rating: '8/9',
                link:<FiLink2/>,
                count:'2',
                date:'created 3 days ago',
                profile:'pic.jpg',
                class1:'line-1',
                class2:'line-2',
                desc: 'Snoozed until Oct 24 10:00pm'
        
        
        
        

            },
            {id:1,
                        
                        
                        
                title:'ContactRM',
                todo:'Design a Website',
                
                icon1:<BsFilter/>,
                commentIcon: <BiCommentDetail/>,
                no:'12',
                icon2: <BsSortDown/>,
                rating: '8/9',
                link:<FiLink2/>,
                count:'2',
                date:'created 3 days ago',
                profile:'pic.jpg',
                class1:'line-1',
                class2:'line-2',
                desc: 'Snoozed until Oct 24 10:00pm'
        
        
        
        

            },
            {id:1,
                        
                        
                        
                title:'ContactRM',
                todo:'Design a Website',
                
                icon1:<BsFilter/>,
                commentIcon: <BiCommentDetail/>,
                no:'12',
                icon2: <BsSortDown/>,
                rating: '8/9',
                link:<FiLink2/>,
                count:'2',
                date:'created 3 days ago',
                profile:'pic.jpg',
                class1:'line-1',
                class2:'line-2',
                desc: 'Snoozed until Oct 24 10:00pm'
        
        
        
        

            },
            {id:1,
                        
                        
                        
                title:'ContactRM',
                todo:'Design a Website',
                
                icon1:<BsFilter/>,
                commentIcon: <BiCommentDetail/>,
                no:'12',
                icon2: <BsSortDown/>,
                rating: '8/9',
                link:<FiLink2/>,
                count:'2',
                date:'created 3 days ago',
                profile:'pic.jpg',
                class1:'line-1',
                class2:'line-2',
                desc: 'Snoozed until Oct 24 10:00pm'
        
        
        
        

            },

        ]
    },
  ]

  return <Tabs control={handle} tabs={tabs} />;
};

export default Aman;
