import { QuestionClass } from './question';

export const QUESTIONS: QuestionClass[] = [
    {
        id:1,
        numberOfAnswers:2, 
        name: 'Which three statements are true about the operation of a full-duplex Ethernet network? (Choose three.)',
        choices: 
        [
            {
                answear:'There are no collisions in full-duplex mode.', istrue:true
            },
            {
                answear:'A dedicated switch port is required for each full-duplex node.', istrue:true
            },
            {
                answear:'Ethernet hub ports are preconfigured for full-duplex mod.', istrue:false
            },
            {
                answear:'In a full-duplex environment, the host network card must check for the availability of the network media before transmitting.', istrue:false
            },
            {
                answear:'The host network card and the switch port must be capable of operating in full-duplex mode.', istrue:true
            }
        ]   
    },
    {
        id:3,
        numberOfAnswers:1,  
        name: 'Which OSI layer header contains the address of a destination host that is on another network?',
        choices: 
        [
            {
                answear:'application', istrue:false
            },
            {
                answear:'session ', istrue:false
            },
            {
                answear:'transport ', istrue:false
            },
            {
                answear:'network ', istrue:true
            },
            {
                answear:'data link', istrue:false
            },
            {
                answear:'physical ', istrue:false
            }
        ]
              
    },
    {
        id:4,
        numberOfAnswers:1,  
        name: 'Which layer of the TCP/IP stack combines the OSI model physical and data link layers?',
        choices: 
        [
            {
                answear:'Internet layer .', istrue:false
            },
            {
                answear:' transport layer ', istrue:false
            },
            {
                answear:' application layer ', istrue:false
            },
            {
                answear:' network access layer ', istrue:true
            }
        ]
              
    },
    {
        id:5,
        numberOfAnswers:1,  
        name: 'Which protocol uses a connection-oriented service to deliver files between end systems?',
        choices: 
        [
            {
                answear:'TFTP ', istrue:false
            },
            {
                answear:'DNS  ', istrue:false
            },
            {
                answear:' FTP  ', istrue:true
            },
            {
                answear:' SNMP  ', istrue:false
            },
            {
                answear:' RIP   ', istrue:false
            }

        ]
              
    }
];
