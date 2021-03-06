const express = require('express');
const path = require('path');
const app = express();

const users = [
  {
    'ID': '1',
    'Group': 'Paramedic',
    'Name': 'Thea Addley',
    'Phone': '8-382-631-3876',
    'Icon': 'https://miro.medium.com/max/2400/1*ZE7swuxne1mIjNbNJD7V9g.png',
  },
  {
    'ID': '2',
    'Group': 'Assistant Buyer',
    'Name': 'Georgia Marshall',
    'Phone': '8-325-828-8345',
    'Icon': 'https://yt3.ggpht.com/a/AGF-l78XxM_TUCv6JD6z4GqmGIfidREQWSPcqvEY9w=s900-c-k-c0xffffffff-no-rj-mo',
  },
  {
    'ID': '3',
    'Group': 'Accountant',
    'Name': 'Alexander Leslie',
    'Phone': '3-371-322-6051',
    'Icon': 'https://i.pinimg.com/736x/9f/ca/98/9fca980fb2f803842eb1a4c959834f18.jpg',
  },
  {
    'ID': '4',
    'Group': 'Staffing Consultant',
    'Name': 'Alexia Mcnally',
    'Phone': '0-202-225-5413',
    'Icon': 'https://yt3.ggpht.com/a/AGF-l792ChwRzkMN56gf5aNLQMBnQqUA8EFJgoTW=s900-c-k-c0xffffffff-no-rj-mo',
  },
  {
    'ID': '5',
    'Group': 'Cashier',
    'Name': 'Nick Milner',
    'Phone': '8-362-410-5858',
    'Icon': 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/cc51c157402709.59d490053241d.png',
  },
  {
    'ID': '6',
    'Group': 'HR Coordinator',
    'Name': 'Chuck Jennson',
    'Phone': '2-640-167-0421',
    'Icon': 'https://sun9-56.userapi.com/c853528/v853528661/aa3dd/hgj63JP2rEA.jpg?ava=1',
  },
  {
    'ID': '7',
    'Group': 'Ambulatory',
    'Name': 'Domenic Whatson',
    'Phone': '8-566-727-6783',
  },
  {
    'ID': '8',
    'Group': 'Cook',
    'Name': 'Bridget Roberts',
    'Phone': '2-337-232-6625',
  },
  {
    'ID': '9',
    'Group': 'Assistant Buyer',
    'Name': 'Macy Reid',
    'Phone': '8-408-715-3725',
  },
  {
    'ID': '10',
    'Group': 'Electrician',
    'Name': 'Havana Robinson',
    'Phone': '8-450-537-0722',
  },
  {
    'ID': '11',
    'Group': 'Staffing Consultant',
    'Name': 'Caleb Redwood',
    'Phone': '8-311-086-3742',
  },
  {
    'ID': '12',
    'Group': 'Cook',
    'Name': 'Melanie Morrison',
    'Phone': '5-124-867-1540',
  },
  {
    'ID': '13',
    'Group': '',
    'Name': 'Tyler Callan',
    'Phone': '5-757-543-3046',
  },
  {
    'ID': '14',
    'Group': 'Biologist',
    'Name': 'Rocco Khan',
    'Phone': '6-175-473-6078',
  },
  {
    'ID': '15',
    'Group': 'Banker',
    'Name': 'Mark Harrison',
    'Phone': '6-602-776-0832',
  },
  {
    'ID': '16',
    'Group': 'Banker',
    'Name': 'Bob Logan',
    'Phone': '0-774-824-4532',
  },
  {
    'ID': '17',
    'Group': 'Baker',
    'Name': 'Martha Faulkner',
    'Phone': '6-777-165-3445',
  },
  {
    'ID': '18',
    'Group': 'Lecturer',
    'Name': 'Erick Welsch',
    'Phone': '2-431-225-1847',
  },
  {
    'ID': '19',
    'Group': 'Lecturer',
    'Name': 'Ethan Collis',
    'Phone': '1-505-272-0531',
  },
  {
    'ID': '20',
    'Group': 'Dentist',
    'Name': 'Angelica Dale',
    'Phone': '3-378-472-1008',
  },
  {
    'ID': '21',
    'Group': '',
    'Name': 'Sonya Styles',
    'Phone': '7-201-531-7386',
  },
  {
    'ID': '22',
    'Group': 'Bellman',
    'Name': 'Bryon Vass',
    'Phone': '7-804-687-5584',
  },
  {
    'ID': '23',
    'Group': '',
    'Name': 'Nancy Rust',
    'Phone': '5-860-562-3382',
  },
  {
    'ID': '24',
    'Group': 'Bellman',
    'Name': 'Keira Butler',
    'Phone': '8-725-412-0835',
  },
  {
    'ID': '25',
    'Group': 'Laboratory Technician',
    'Name': 'Winnie Clifford',
    'Phone': '5-062-312-3152',
  },
  {
    'ID': '26',
    'Group': 'Laboratory Technician',
    'Name': 'Ema Ebbs',
    'Phone': '5-124-225-6686',
  },
  {
    'ID': '27',
    'Group': 'Stockbroker',
    'Name': 'Fred Lomax',
    'Phone': '0-342-006-3186',
  },
  {
    'ID': '28',
    'Group': 'Bellman',
    'Name': 'Joyce Williams',
    'Phone': '6-528-274-7100',
  },
  {
    'ID': '29',
    'Group': 'HR Specialist',
    'Name': 'Bob Addis',
    'Phone': '2-745-363-7105',
  },
  {
    'ID': '30',
    'Group': 'Bellman',
    'Name': 'Beatrice Donovan',
    'Phone': '8-278-010-1574',
  },
  {
    'ID': '31',
    'Group': 'HR Specialist',
    'Name': 'Macy Willson',
    'Phone': '4-254-703-4085',
  },
  {
    'ID': '32',
    'Group': 'Stockbroker',
    'Name': 'Allison Eagle',
    'Phone': '3-402-871-1336',
  },
  {
    'ID': '33',
    'Group': 'Designer',
    'Name': 'Julian Owens',
    'Phone': '5-615-568-1815',
  },
  {
    'ID': '34',
    'Group': 'Machine Operator',
    'Name': 'Lindsay Richards',
    'Phone': '0-264-487-6232',
  },
  {
    'ID': '35',
    'Group': 'Doctor',
    'Name': 'Chester Latham',
    'Phone': '7-168-378-1733',
  },
  {
    'ID': '36',
    'Group': 'Designer',
    'Name': 'Percy Jones',
    'Phone': '8-418-344-6216',
  },
  {
    'ID': '37',
    'Group': 'Inspector',
    'Name': 'Rebecca York',
    'Phone': '5-607-231-7450',
  },
  {
    'ID': '38',
    'Group': 'Service Supervisor',
    'Name': 'Kate Blythe',
    'Phone': '5-558-378-2653',
  },
  {
    'ID': '39',
    'Group': 'Audiologist',
    'Name': 'Enoch Edley',
    'Phone': '7-883-752-2787',
  },
  {
    'ID': '40',
    'Group': 'Assistant Buyer',
    'Name': 'Christine Anderson',
    'Phone': '4-561-513-0756',
  },
  {
    'ID': '41',
    'Group': 'Cash Manager',
    'Name': 'Parker Mann',
    'Phone': '8-607-600-4142',
  },
  {
    'ID': '42',
    'Group': 'Bookkeeper',
    'Name': 'Daniel Freeburn',
    'Phone': '0-273-166-2144',
  },
  {
    'ID': '43',
    'Group': 'Restaurant Manager',
    'Name': 'Mike Murphy',
    'Phone': '0-808-016-7613',
  },
  {
    'ID': '44',
    'Group': 'Webmaster',
    'Name': 'Teagan Oldfield',
    'Phone': '7-512-435-7111',
  },
  {
    'ID': '45',
    'Group': 'Treasurer',
    'Name': 'Callie Watson',
    'Phone': '1-860-422-7723',
  },
  {
    'ID': '46',
    'Group': 'Fabricator',
    'Name': 'Alan Wallace',
    'Phone': '5-268-576-7263',
  },
  {
    'ID': '47',
    'Group': 'Paramedic',
    'Name': 'Joseph Douglas',
    'Phone': '7-744-044-4185',
  },
  {
    'ID': '48',
    'Group': 'Cash Manager',
    'Name': 'Liv Reynolds',
    'Phone': '0-453-586-7633',
  },
  {
    'ID': '49',
    'Group': 'Audiologist',
    'Name': 'Nicholas Barrett',
    'Phone': '1-308-447-5220',
  },
  {
    'ID': '50',
    'Group': 'Clerk',
    'Name': 'Marie Rowlands',
    'Phone': '0-470-674-4181',
  },
  {
    'ID': '51',
    'Group': 'Stockbroker',
    'Name': 'Gwen Stark',
    'Phone': '3-010-615-2451',
  },
  {
    'ID': '52',
    'Group': 'Ambulatory Nurse',
    'Name': 'Rylee Whitehouse',
    'Phone': '1-175-281-3525',
  },
  {
    'ID': '53',
    'Group': 'Auditor',
    'Name': 'Chuck Henderson',
    'Phone': '4-045-705-5274',
  },
  {
    'ID': '54',
    'Group': 'Accountant',
    'Name': 'Jack Malone',
    'Phone': '0-126-701-1852',
  },
  {
    'ID': '55',
    'Group': 'Webmaster',
    'Name': 'Remy Campbell',
    'Phone': '2-631-113-6244',
  },
  {
    'ID': '56',
    'Group': 'Biologist',
    'Name': 'Sydney Dubois',
    'Phone': '7-780-145-1022',
  },
  {
    'ID': '57',
    'Group': 'Cook',
    'Name': 'Andie Hancock',
    'Phone': '3-170-567-1235',
  },
  {
    'ID': '58',
    'Group': 'Food Technologist',
    'Name': 'Lexi Wilton',
    'Phone': '4-431-736-3555',
  },
  {
    'ID': '59',
    'Group': 'Doctor',
    'Name': 'Josh Coll',
    'Phone': '2-866-137-4108',
  },
  {
    'ID': '60',
    'Group': 'Software Engineer',
    'Name': 'Danny Welsch',
    'Phone': '1-586-773-3125',
  },
  {
    'ID': '61',
    'Group': 'Doctor',
    'Name': 'Aiden Moore',
    'Phone': '1-523-166-2106',
  },
  {
    'ID': '62',
    'Group': 'Cashier',
    'Name': 'Roger Broomfield',
    'Phone': '5-168-484-4007',
  },
  {
    'ID': '63',
    'Group': '',
    'Name': 'Peter Pearson',
    'Phone': '5-500-834-1483',
  },
  {
    'ID': '64',
    'Group': 'Service Supervisor',
    'Name': 'Phillip Furnell',
    'Phone': '6-023-530-2805',
  },
  {
    'ID': '65',
    'Group': 'Retail Trainee',
    'Name': 'Nathan Dyson',
    'Phone': '1-175-410-1141',
  },
  {
    'ID': '66',
    'Group': 'Restaurant Manager',
    'Name': 'Ronald Rivers',
    'Phone': '5-677-262-1715',
  },
  {
    'ID': '67',
    'Group': 'Project Manager',
    'Name': 'Rosalie Newton',
    'Phone': '2-272-625-2106',
  },
  {
    'ID': '68',
    'Group': 'Dentist',
    'Name': 'Daniel Weasley',
    'Phone': '4-728-481-3058',
  },
  {
    'ID': '69',
    'Group': 'Loan Officer',
    'Name': 'Chad Rose',
    'Phone': '7-818-170-8278',
  },
  {
    'ID': '70',
    'Group': 'Electrician',
    'Name': 'Eve Williams',
    'Phone': '7-113-568-1421',
  },
  {
    'ID': '71',
    'Group': 'Global Logistics Supervisor',
    'Name': 'Julius Ingram',
    'Phone': '1-572-176-1654',
  },
  {
    'ID': '72',
    'Group': 'Bellman',
    'Name': 'Tyler Leigh',
    'Phone': '4-455-667-4717',
  },
  {
    'ID': '73',
    'Group': 'Biologist',
    'Name': 'Oliver Utterson',
    'Phone': '8-313-624-3560',
  },
  {
    'ID': '74',
    'Group': 'Ambulatoryu',
    'Name': 'Matthew Campbell',
    'Phone': '6-808-653-1802',
  },
  {
    'ID': '75',
    'Group': 'HR Specialist',
    'Name': 'Cara Janes',
    'Phone': '8-156-616-5310',
  },
  {
    'ID': '76',
    'Group': 'CNC Operator',
    'Name': 'Alexander Griffiths',
    'Phone': '7-376-376-5734',
  },
  {
    'ID': '77',
    'Group': 'Healthcare Specialist',
    'Name': 'Summer Hobbs',
    'Phone': '1-412-783-6088',
  },
  {
    'ID': '78',
    'Group': 'Machine Operator',
    'Name': 'Mike Stone',
    'Phone': '3-322-272-2641',
  },
  {
    'ID': '79',
    'Group': 'Machine Operator',
    'Name': 'Mara Martin',
    'Phone': '8-428-048-6053',
  },
  {
    'ID': '80',
    'Group': 'Systems Administrator',
    'Name': 'Julian Woods',
    'Phone': '4-070-017-8058',
  },
  {
    'ID': '81',
    'Group': 'IT Support Staff',
    'Name': 'Enoch Baker',
    'Phone': '4-637-041-7723',
  },
  {
    'ID': '82',
    'Group': 'Cash Manager',
    'Name': 'Anabelle Foxley',
    'Phone': '0-442-815-5201',
  },
  {
    'ID': '83',
    'Group': 'Restaurant Manager',
    'Name': 'Ciara Blythe',
    'Phone': '1-483-153-8683',
  },
  {
    'ID': '84',
    'Group': 'Pharmacist',
    'Name': 'Erick Matthews',
    'Phone': '4-421-436-1747',
  },
  {
    'ID': '85',
    'Group': 'Steward',
    'Name': 'Angelina Dixon',
    'Phone': '0-846-076-7425',
  },
  {
    'ID': '86',
    'Group': '',
    'Name': 'Francesca Randall',
    'Phone': '8-575-551-0664',
  },
  {
    'ID': '87',
    'Group': 'Business Broker',
    'Name': 'Elle Swan',
    'Phone': '5-226-836-3666',
  },
  {
    'ID': '88',
    'Group': 'Operator',
    'Name': 'Cedrick Thomas',
    'Phone': '7-762-422-4137',
  },
  {
    'ID': '89',
    'Group': 'Machine Operator',
    'Name': 'Jade Saunders',
    'Phone': '4-571-632-0401',
  },
  {
    'ID': '90',
    'Group': 'Steward',
    'Name': 'Juliet Wild',
    'Phone': '7-308-856-7402',
  },
  {
    'ID': '91',
    'Group': 'Steward',
    'Name': 'Lucas Anderson',
    'Phone': '4-841-217-6144',
  },
  {
    'ID': '92',
    'Group': 'Retail Trainee',
    'Name': 'Bristol Hamilton',
    'Phone': '1-152-447-7087',
  },
  {
    'ID': '93',
    'Group': 'Chef Manager',
    'Name': 'Javier Lindop',
    'Phone': '4-163-516-8460',
  },
  {
    'ID': '94',
    'Group': 'Loan Officer',
    'Name': 'Chadwick Thornton',
    'Phone': '8-451-812-7855',
  },
  {
    'ID': '95',
    'Group': 'Audiologist',
    'Name': 'Sonya Lomax',
    'Phone': '2-347-030-7513',
  },
  {
    'ID': '96',
    'Group': 'Pharmacist',
    'Name': 'Michael Farrell',
    'Phone': '7-846-031-2211',
  },
  {
    'ID': '97',
    'Group': 'Treasurer',
    'Name': 'Logan Mackenzie',
    'Phone': '0-260-351-0207',
  },
  {
    'ID': '98',
    'Group': 'HR Specialist',
    'Name': 'Ronald Ingham',
    'Phone': '8-123-766-6211',
  },
  {
    'ID': '99',
    'Group': 'Associate Professor',
    'Name': 'Blake Gibbons',
    'Phone': '8-285-014-0175',
  },
  {
    'ID': '100',
    'Group': 'Designer',
    'Name': 'Selena Dwyer',
    'Phone': '6-126-281-3022',
  },
  {
    'ID': '101',
    'Group': 'Physician',
    'Name': 'Marigold Swan',
    'Phone': '4-843-056-3834',
  },
  {
    'ID': '102',
    'Group': 'Fabricator',
    'Name': 'Rick Varndell',
    'Phone': '7-411-487-4377',
  },
  {
    'ID': '103',
    'Group': 'CNC Operator',
    'Name': 'Sarah Wallace',
    'Phone': '5-017-263-6548',
  },
  {
    'ID': '104',
    'Group': 'Front Desk Coordinator',
    'Name': 'Domenic Fowler',
    'Phone': '7-867-373-3336',
  },
  {
    'ID': '105',
    'Group': 'Fabricator',
    'Name': 'Benny Attwood',
    'Phone': '7-601-640-2234',
  },
  {
    'ID': '106',
    'Group': 'Ambulatory',
    'Name': 'Phillip Williams',
    'Phone': '1-405-071-1882',
  },
  {
    'ID': '107',
    'Group': 'Treasurer',
    'Name': 'Chad Garner',
    'Phone': '2-112-626-1527',
  },
  {
    'ID': '108',
    'Group': 'Chef Manager',
    'Name': 'Domenic Kerr',
    'Phone': '8-767-223-5445',
  },
  {
    'ID': '109',
    'Group': 'Steward',
    'Name': 'Sebastian Farrell',
    'Phone': '7-176-135-2823',
  },
  {
    'ID': '110',
    'Group': 'Chef Manager',
    'Name': 'Leroy Vinton',
    'Phone': '1-660-848-8128',
  },
  {
    'ID': '111',
    'Group': 'Software Engineer',
    'Name': 'Clarissa Rust',
    'Phone': '5-681-457-5243',
  },
  {
    'ID': '112',
    'Group': 'Insurance Broker',
    'Name': 'Michael Jefferson',
    'Phone': '0-822-287-0208',
  },
  {
    'ID': '113',
    'Group': 'Executive Director',
    'Name': 'Aiden Bryson',
    'Phone': '6-838-553-1663',
  },
  {
    'ID': '114',
    'Group': 'Physician',
    'Name': 'Luna Scott',
    'Phone': '8-132-202-3407',
  },
  {
    'ID': '115',
    'Group': 'Call Center Representative',
    'Name': 'Elijah Cadman',
    'Phone': '3-011-730-7825',
  },
  {
    'ID': '116',
    'Group': 'Budget Analyst',
    'Name': 'Scarlett Alcroft',
    'Phone': '7-345-067-3203',
  },
  {
    'ID': '117',
    'Group': 'Loan Officer',
    'Name': 'Manuel Irwin',
    'Phone': '8-601-328-3627',
  },
  {
    'ID': '118',
    'Group': 'Webmaster',
    'Name': 'Colleen Noon',
    'Phone': '3-674-141-8175',
  },
  {
    'ID': '119',
    'Group': 'Loan Officer',
    'Name': 'Gabriel Gaynor',
    'Phone': '7-181-286-3168',
  },
  {
    'ID': '120',
    'Group': 'Insurance Broker',
    'Name': 'Christine Wilson',
    'Phone': '3-235-656-3526',
  },
  {
    'ID': '121',
    'Group': 'HR Coordinator',
    'Name': 'Leroy Whitmore',
    'Phone': '5-832-453-3666',
  },
  {
    'ID': '122',
    'Group': 'Call Center Representative',
    'Name': 'Denis Mullins',
    'Phone': '4-457-422-2270',
  },
  {
    'ID': '123',
    'Group': 'Cashier',
    'Name': 'Rocco Norburn',
    'Phone': '1-714-005-4858',
  },
  {
    'ID': '124',
    'Group': 'Executive Director',
    'Name': 'Hayden Vaughn',
    'Phone': '2-043-721-0643',
  },
  {
    'ID': '125',
    'Group': 'Project Manager',
    'Name': 'Freya Wheeler',
    'Phone': '7-041-581-1617',
  },
  {
    'ID': '126',
    'Group': 'Call Center Representative',
    'Name': 'Alan Khan',
    'Phone': '3-542-502-7828',
  },
  {
    'ID': '127',
    'Group': 'Chef Manager',
    'Name': 'Anthony Upsdell',
    'Phone': '3-515-673-4210',
  },
  {
    'ID': '128',
    'Group': 'Bookkeeper',
    'Name': 'Vanessa Harris',
    'Phone': '3-471-171-7625',
  },
  {
    'ID': '129',
    'Group': 'Mobile Developer',
    'Name': 'Doug Olson',
    'Phone': '1-620-726-0458',
  },
  {
    'ID': '130',
    'Group': 'Designer',
    'Name': 'Rita Rosenbloom',
    'Phone': '1-458-748-2781',
  },
  {
    'ID': '131',
    'Group': 'Audiologist',
    'Name': 'Mackenzie Saunders',
    'Phone': '5-746-825-6375',
  },
  {
    'ID': '132',
    'Group': 'Design Engineer',
    'Name': 'Bob Crawford',
    'Phone': '6-061-115-5101',
  },
  {
    'ID': '133',
    'Group': 'Health Educator',
    'Name': 'Roger Notman',
    'Phone': '3-272-014-4124',
  },
  {
    'ID': '134',
    'Group': 'Healthcare Specialist',
    'Name': 'Hadley Farrant',
    'Phone': '0-565-211-2000',
  },
  {
    'ID': '135',
    'Group': 'Health Educator',
    'Name': 'Andrea Baxter',
    'Phone': '7-265-325-0401',
  },
  {
    'ID': '136',
    'Group': 'Budget Analyst',
    'Name': 'Noah Wright',
    'Phone': '3-237-057-7752',
  },
  {
    'ID': '137',
    'Group': 'Global Logistics Supervisor',
    'Name': 'Adalind Alcroft',
    'Phone': '7-172-420-5783',
  },
  {
    'ID': '138',
    'Group': 'Designer',
    'Name': 'Keira Milner',
    'Phone': '5-533-568-4418',
  },
  {
    'ID': '139',
    'Group': 'Treasurer',
    'Name': 'Henry Carter',
    'Phone': '2-764-106-2333',
  },
  {
    'ID': '140',
    'Group': 'Budget Analyst',
    'Name': 'Carolyn Davies',
    'Phone': '8-517-865-2628',
  },
  {
    'ID': '141',
    'Group': 'Design Engineer',
    'Name': 'Carissa Thomson',
    'Phone': '7-246-547-5308',
  },
  {
    'ID': '142',
    'Group': 'Banker',
    'Name': 'Dasha Mullins',
    'Phone': '0-357-122-0035',
  },
  {
    'ID': '143',
    'Group': 'HR Specialist',
    'Name': 'Jaylene Dunbar',
    'Phone': '3-218-411-7211',
  },
  {
    'ID': '144',
    'Group': 'Operator',
    'Name': 'Angelina Mcguire',
    'Phone': '3-614-150-4825',
  },
  {
    'ID': '145',
    'Group': 'Ambulatory',
    'Name': 'Jessica Quinton',
    'Phone': '8-720-551-0507',
  },
  {
    'ID': '146',
    'Group': 'Healthcare Specialist',
    'Name': 'Sydney Webster',
    'Phone': '2-320-083-4153',
  },
  {
    'ID': '147',
    'Group': 'Retail Trainee',
    'Name': 'Ron Boyle',
    'Phone': '8-652-126-6141',
  },
  {
    'ID': '148',
    'Group': 'Production Painter',
    'Name': 'Chelsea Quinn',
    'Phone': '1-667-828-3114',
  },
  {
    'ID': '149',
    'Group': 'Web Developer',
    'Name': 'Chad Palmer',
    'Phone': '6-036-117-0574',
  },
  {
    'ID': '150',
    'Group': 'Restaurant Manager',
    'Name': 'Diane Shea',
    'Phone': '1-707-451-3658',
  },
  {
    'ID': '151',
    'Group': 'Chef Manager',
    'Name': 'Margot Snell',
    'Phone': '8-427-613-7212',
  },
  {
    'ID': '152',
    'Group': 'Fabricator',
    'Name': 'Sabrina Brown',
    'Phone': '5-672-862-3865',
  },
  {
    'ID': '153',
    'Group': 'Software Engineer',
    'Name': 'Aurelia Morris',
    'Phone': '8-388-882-3777',
  },
  {
    'ID': '154',
    'Group': 'Stockbroker',
    'Name': 'Angel Little',
    'Phone': '7-032-013-1175',
  },
  {
    'ID': '155',
    'Group': 'Baker',
    'Name': 'Britney Bryson',
    'Phone': '4-670-177-2142',
  },
  {
    'ID': '156',
    'Group': 'Pharmacist',
    'Name': 'Phoebe Campbell',
    'Phone': '7-366-752-3085',
  },
  {
    'ID': '157',
    'Group': 'Systems Administrator',
    'Name': 'Gabriel Bullock',
    'Phone': '7-816-210-6438',
  },
  {
    'ID': '158',
    'Group': 'Web Developer',
    'Name': 'Bryce Bell',
    'Phone': '6-270-024-6251',
  },
  {
    'ID': '159',
    'Group': 'Insurance Broker',
    'Name': 'Daphne Cowan',
    'Phone': '5-018-522-3086',
  },
  {
    'ID': '160',
    'Group': 'Retail Trainee',
    'Name': 'Brad Hood',
    'Phone': '7-052-124-7083',
  },
  {
    'ID': '161',
    'Group': 'Inspector',
    'Name': 'Maddison Carpenter',
    'Phone': '7-257-785-2134',
  },
  {
    'ID': '162',
    'Group': 'Assistant Buyer',
    'Name': 'Matt Victor',
    'Phone': '4-233-706-4831',
  },
  {
    'ID': '163',
    'Group': 'Web Developer',
    'Name': 'Eduardo Vangness',
    'Phone': '0-228-131-2382',
  },
  {
    'ID': '164',
    'Group': 'IT Support Staff',
    'Name': 'Melanie Parker',
    'Phone': '3-667-317-5201',
  },
  {
    'ID': '165',
    'Group': 'Budget Analyst',
    'Name': 'Luna Mooney',
    'Phone': '6-338-325-6773',
  },
  {
    'ID': '166',
    'Group': 'Food Technologist',
    'Name': 'Lucas Cameron',
    'Phone': '2-153-834-3412',
  },
  {
    'ID': '167',
    'Group': 'Food Technologist',
    'Name': 'Tom Exton',
    'Phone': '5-576-274-4436',
  },
  {
    'ID': '168',
    'Group': '',
    'Name': 'Priscilla Watson',
    'Phone': '1-716-681-1421',
  },
  {
    'ID': '169',
    'Group': '',
    'Name': 'Kurt Terry',
    'Phone': '5-578-171-2167',
  },
  {
    'ID': '170',
    'Group': 'Designer',
    'Name': 'Ember Marshall',
    'Phone': '3-533-833-2103',
  },
  {
    'ID': '171',
    'Group': 'Doctor',
    'Name': 'Jack Forth',
    'Phone': '8-563-601-8720',
  },
  {
    'ID': '172',
    'Group': 'Steward',
    'Name': 'Gil Walker',
    'Phone': '2-012-854-3761',
  },
  {
    'ID': '173',
    'Group': 'Production Painter',
    'Name': 'Emmanuelle Larkin',
    'Phone': '3-870-718-7211',
  },
  {
    'ID': '174',
    'Group': 'Call Center Representative',
    'Name': 'Barry Thatcher',
    'Phone': '7-312-631-8443',
  },
  {
    'ID': '175',
    'Group': '',
    'Name': 'Carmella Nelson',
    'Phone': '5-500-716-0263',
  },
  {
    'ID': '176',
    'Group': '',
    'Name': 'Roger Walter',
    'Phone': '8-810-772-3131',
  },
  {
    'ID': '177',
    'Group': 'Cash Manager',
    'Name': 'Melinda Overson',
    'Phone': '0-017-455-5360',
  },
  {
    'ID': '178',
    'Group': 'HR Coordinator',
    'Name': 'Bob Ashwell',
    'Phone': '1-377-548-7753',
  },
  {
    'ID': '179',
    'Group': 'Auditor',
    'Name': 'Esmeralda Roman',
    'Phone': '1-457-620-0403',
  },
  {
    'ID': '180',
    'Group': 'Systems Administrator',
    'Name': 'Denny Mitchell',
    'Phone': '5-376-170-4780',
  },
  {
    'ID': '181',
    'Group': 'Front Desk Coordinator',
    'Name': 'Marvin Harrington',
    'Phone': '3-587-456-0711',
  },
  {
    'ID': '182',
    'Group': 'Cashier',
    'Name': 'Emerald Wright',
    'Phone': '1-148-004-1461',
  },
  {
    'ID': '183',
    'Group': 'Executive Director',
    'Name': 'Noah Reid',
    'Phone': '0-683-662-8717',
  },
  {
    'ID': '184',
    'Group': 'Inspector',
    'Name': 'Anabelle Grant',
    'Phone': '4-665-687-3008',
  },
  {
    'ID': '185',
    'Group': 'IT Support Staff',
    'Name': 'Roger Tobin',
    'Phone': '5-012-033-7058',
  },
  {
    'ID': '186',
    'Group': 'Lecturer',
    'Name': 'Matthew Torres',
    'Phone': '6-444-132-0162',
  },
  {
    'ID': '187',
    'Group': 'Service Supervisor',
    'Name': 'Paige Potts',
    'Phone': '1-774-571-6450',
  },
  {
    'ID': '188',
    'Group': 'Call Center Representative',
    'Name': 'Matt Allwood',
    'Phone': '6-157-230-8782',
  },
  {
    'ID': '189',
    'Group': 'CNC Operator',
    'Name': 'Rufus Wild',
    'Phone': '1-542-302-0134',
  },
  {
    'ID': '190',
    'Group': 'CNC Operator',
    'Name': 'Brooklyn Corbett',
    'Phone': '4-603-006-0031',
  },
  {
    'ID': '191',
    'Group': 'HR Specialist',
    'Name': 'Carrie Henderson',
    'Phone': '7-116-443-3563',
  },
  {
    'ID': '192',
    'Group': 'Webmaster',
    'Name': 'Nate Fowler',
    'Phone': '5-006-457-5474',
  },
  {
    'ID': '193',
    'Group': 'Physician',
    'Name': 'Denis Johnson',
    'Phone': '1-247-535-2450',
  },
  {
    'ID': '194',
    'Group': 'IT Support Staff',
    'Name': 'Rick Appleton',
    'Phone': '8-162-617-2060',
  },
  {
    'ID': '195',
    'Group': 'Insurance Broker',
    'Name': 'Hayden Cooper',
    'Phone': '0-853-406-6740',
  },
  {
    'ID': '196',
    'Group': 'Budget Analyst',
    'Name': 'Elijah Bentley',
    'Phone': '3-387-827-1003',
  },
  {
    'ID': '197',
    'Group': 'Health Educator',
    'Name': 'Leilani Kent',
    'Phone': '6-734-416-0052',
  },
  {
    'ID': '198',
    'Group': 'Loan Officer',
    'Name': 'Harvey Burnley',
    'Phone': '3-205-355-8862',
  },
  {
    'ID': '199',
    'Group': 'Physician',
    'Name': 'Denny Murphy',
    'Phone': '0-252-622-0615',
  },
  {
    'ID': '200',
    'Group': 'Auditor',
    'Name': 'Barry Phillips',
    'Phone': '7-733-500-6671',
  },
  {
    'ID': '201',
    'Group': 'Physician',
    'Name': 'Matthew Clarke',
    'Phone': '4-168-587-5030',
  },
  {
    'ID': '202',
    'Group': 'Front Desk Coordinator',
    'Name': 'Hope Kennedy',
    'Phone': '2-662-732-0600',
  },
  {
    'ID': '203',
    'Group': 'Inspector',
    'Name': 'Alma Olson',
    'Phone': '3-733-635-8560',
  },
  {
    'ID': '204',
    'Group': 'Cash Manager',
    'Name': 'Ronald Rosenbloom',
    'Phone': '8-528-531-1781',
  },
  {
    'ID': '205',
    'Group': 'Food Technologist',
    'Name': 'Leslie Ryan',
    'Phone': '4-724-027-8635',
  },
  {
    'ID': '206',
    'Group': 'Dentist',
    'Name': 'Michael Hooper',
    'Phone': '1-001-131-0712',
  },
  {
    'ID': '207',
    'Group': 'Physician',
    'Name': 'Hope Mcneill',
    'Phone': '2-501-218-7020',
  },
  {
    'ID': '208',
    'Group': 'Lecturer',
    'Name': 'Harry Umney',
    'Phone': '6-060-710-7612',
  },
  {
    'ID': '209',
    'Group': 'Health Educator',
    'Name': 'Florence Garcia',
    'Phone': '5-341-086-8261',
  },
  {
    'ID': '210',
    'Group': 'Pharmacist',
    'Name': 'Rocco Power',
    'Phone': '6-538-428-3531',
  },
  {
    'ID': '211',
    'Group': 'Accountant',
    'Name': 'Nicole Rust',
    'Phone': '2-532-561-3488',
  },
  {
    'ID': '212',
    'Group': 'Ambulatory Nurse',
    'Name': 'Chadwick Chapman',
    'Phone': '8-006-453-4746',
  },
  {
    'ID': '213',
    'Group': 'HR Coordinator',
    'Name': 'Raquel Mann',
    'Phone': '1-302-357-7125',
  },
  {
    'ID': '214',
    'Group': 'Auditor',
    'Name': 'Sabrina Vaughan',
    'Phone': '1-500-416-5438',
  },
  {
    'ID': '215',
    'Group': 'Budget Analyst',
    'Name': 'Enoch Howard',
    'Phone': '7-265-650-1001',
  },
  {
    'ID': '216',
    'Group': 'Paramedic',
    'Name': 'Denny Underhill',
    'Phone': '3-433-317-7273',
  },
  {
    'ID': '217',
    'Group': 'Budget Analyst',
    'Name': 'Belinda Simmons',
    'Phone': '4-201-424-2270',
  },
  {
    'ID': '218',
    'Group': 'Pharmacist',
    'Name': 'Priscilla Middleton',
    'Phone': '7-825-035-1378',
  },
  {
    'ID': '219',
    'Group': 'Ambulatory Nurse',
    'Name': 'Elly Walsh',
    'Phone': '8-425-482-6758',
  },
  {
    'ID': '220',
    'Group': 'Laboratory Technician',
    'Name': 'Bob Lee',
    'Phone': '6-788-843-8787',
  },
  {
    'ID': '221',
    'Group': 'Clerk',
    'Name': 'Karla Lloyd',
    'Phone': '8-140-850-4435',
  },
  {
    'ID': '222',
    'Group': 'IT Support Staff',
    'Name': 'Matt Wright',
    'Phone': '2-451-114-3764',
  },
  {
    'ID': '223',
    'Group': 'Staffing Consultant',
    'Name': 'Benjamin Olivier',
    'Phone': '7-622-576-0555',
  },
  {
    'ID': '224',
    'Group': 'Chef Manager',
    'Name': 'Maya Jones',
    'Phone': '2-886-633-3234',
  },
  {
    'ID': '225',
    'Group': 'Production Painter',
    'Name': 'Janice Hobbs',
    'Phone': '0-577-577-1325',
  },
  {
    'ID': '226',
    'Group': 'Project Manager',
    'Name': 'Clint Mccormick',
    'Phone': '7-084-345-7823',
  },
  {
    'ID': '227',
    'Group': 'Dentist',
    'Name': 'Iris Alldridge',
    'Phone': '1-061-504-5844',
  },
  {
    'ID': '228',
    'Group': 'Mobile Developer',
    'Name': 'Domenic Nobbs',
    'Phone': '8-376-436-0884',
  },
  {
    'ID': '229',
    'Group': 'Loan Officer',
    'Name': 'Benny Redwood',
    'Phone': '5-622-146-7843',
  },
  {
    'ID': '230',
    'Group': 'Inspector',
    'Name': 'Bart Shea',
    'Phone': '6-036-303-3463',
  },
  {
    'ID': '231',
    'Group': 'Service Supervisor',
    'Name': 'Jessica Corbett',
    'Phone': '1-407-765-2162',
  },
  {
    'ID': '232',
    'Group': 'Inspector',
    'Name': 'Wade Webster',
    'Phone': '8-708-143-1101',
  },
  {
    'ID': '233',
    'Group': 'Bookkeeper',
    'Name': 'Oliver Cavanagh',
    'Phone': '4-757-273-1121',
  },
  {
    'ID': '234',
    'Group': 'Web Developer',
    'Name': 'Charlotte Briggs',
    'Phone': '5-413-648-8056',
  },
  {
    'ID': '235',
    'Group': 'Operator',
    'Name': 'Julius Clifton',
    'Phone': '2-753-137-1824',
  },
  {
    'ID': '236',
    'Group': 'HR Coordinator',
    'Name': 'Julius Quinton',
    'Phone': '5-200-462-3724',
  },
  {
    'ID': '237',
    'Group': 'Mobile Developer',
    'Name': 'Javier Fox',
    'Phone': '4-543-031-7866',
  },
  {
    'ID': '238',
    'Group': 'Doctor',
    'Name': 'Chester Pitt',
    'Phone': '8-020-842-7100',
  },
  {
    'ID': '239',
    'Group': 'Bookkeeper',
    'Name': 'Gabriel Lewin',
    'Phone': '4-283-681-4664',
  },
  {
    'ID': '240',
    'Group': 'Restaurant Manager',
    'Name': 'Mara Abbot',
    'Phone': '3-025-346-4101',
  },
  {
    'ID': '241',
    'Group': 'Design Engineer',
    'Name': 'Tyson Nielson',
    'Phone': '8-372-233-7327',
  },
  {
    'ID': '242',
    'Group': 'Mobile Developer',
    'Name': 'Johnny Roberts',
    'Phone': '1-142-581-0517',
  },
  {
    'ID': '243',
    'Group': 'Systems Administrator',
    'Name': 'Stacy James',
    'Phone': '0-706-714-8040',
  },
  {
    'ID': '244',
    'Group': 'Stockbroker',
    'Name': 'Mina Russell',
    'Phone': '7-116-883-0706',
  },
  {
    'ID': '245',
    'Group': 'Web Developer',
    'Name': 'Ally Ebbs',
    'Phone': '5-557-105-7435',
  },
  {
    'ID': '246',
    'Group': 'Health Educator',
    'Name': 'Violet Shaw',
    'Phone': '7-360-255-1356',
  },
  {
    'ID': '247',
    'Group': 'Doctor',
    'Name': 'Carmella Coleman',
    'Phone': '7-375-845-0152',
  },
  {
    'ID': '248',
    'Group': 'Electrician',
    'Name': 'Mara Curtis',
    'Phone': '6-811-124-1678',
  },
  {
    'ID': '249',
    'Group': 'Doctor',
    'Name': 'Chester Ellison',
    'Phone': '2-313-423-7812',
  },
  {
    'ID': '250',
    'Group': 'Mobile Developer',
    'Name': 'Nick Nurton',
    'Phone': '3-870-765-0462',
  },
  {
    'ID': '251',
    'Group': 'Business Broker',
    'Name': 'Joseph Alcroft',
    'Phone': '0-376-380-2702',
  },
  {
    'ID': '252',
    'Group': 'Web Developer',
    'Name': 'Henry Stubbs',
    'Phone': '0-066-485-1265',
  },
  {
    'ID': '253',
    'Group': 'Machine Operator',
    'Name': 'Ivy Durrant',
    'Phone': '0-208-083-7002',
  },
  {
    'ID': '254',
    'Group': 'Food Technologist',
    'Name': 'Doug Pearce',
    'Phone': '5-384-624-3283',
  },
  {
    'ID': '255',
    'Group': 'Production Painter',
    'Name': 'Lynn Oakley',
    'Phone': '5-355-000-1805',
  },
  {
    'ID': '256',
    'Group': 'Clerk',
    'Name': 'Blake Oldfield',
    'Phone': '2-516-013-1884',
  },
  {
    'ID': '257',
    'Group': 'Systems Administrator',
    'Name': 'Gabriel Selby',
    'Phone': '6-773-471-3844',
  },
  {
    'ID': '258',
    'Group': 'CNC Operator',
    'Name': 'Rufus Patel',
    'Phone': '1-870-668-7852',
  },
  {
    'ID': '259',
    'Group': 'Software Engineer',
    'Name': 'Carla Donnelly',
    'Phone': '0-212-263-2131',
  },
  {
    'ID': '260',
    'Group': 'Healthcare Specialist',
    'Name': 'Valerie Amstead',
    'Phone': '8-366-751-7306',
  },
  {
    'ID': '261',
    'Group': 'Service Supervisor',
    'Name': 'Angelina Harrison',
    'Phone': '6-463-310-6146',
  },
  {
    'ID': '262',
    'Group': 'Software Engineer',
    'Name': 'Tiffany Nelson',
    'Phone': '4-663-674-8788',
  },
  {
    'ID': '263',
    'Group': 'Treasurer',
    'Name': 'Barry Rogers',
    'Phone': '6-448-664-7627',
  },
  {
    'ID': '264',
    'Group': 'Physician',
    'Name': 'Megan Stevens',
    'Phone': '7-417-402-3021',
  },
  {
    'ID': '265',
    'Group': 'HR Coordinator',
    'Name': 'Juliette Bright',
    'Phone': '6-246-622-6878',
  },
  {
    'ID': '266',
    'Group': 'Auditor',
    'Name': 'Henry Tanner',
    'Phone': '1-067-043-8534',
  },
  {
    'ID': '267',
    'Group': 'Chef Manager',
    'Name': 'Martin Flanders',
    'Phone': '1-533-551-6465',
  },
  {
    'ID': '268',
    'Group': 'Investment  Advisor',
    'Name': 'Kate Abbey',
    'Phone': '2-331-017-0372',
  },
  {
    'ID': '269',
    'Group': 'Service Supervisor',
    'Name': 'Brad Eagle',
    'Phone': '1-703-633-5320',
  },
  {
    'ID': '270',
    'Group': 'Designer',
    'Name': 'Henry Todd',
    'Phone': '7-180-116-1422',
  },
  {
    'ID': '271',
    'Group': 'HR Specialist',
    'Name': 'Sadie Middleton',
    'Phone': '2-242-576-7317',
  },
  {
    'ID': '272',
    'Group': 'Loan Officer',
    'Name': 'Candice Moore',
    'Phone': '8-588-013-6004',
  },
  {
    'ID': '273',
    'Group': 'Cook',
    'Name': 'David Murray',
    'Phone': '7-300-076-7450',
  },
  {
    'ID': '274',
    'Group': 'Production Painter',
    'Name': 'Carter Janes',
    'Phone': '2-624-355-0318',
  },
  {
    'ID': '275',
    'Group': 'Chef Manager',
    'Name': 'Sebastian Flack',
    'Phone': '2-168-236-7712',
  },
  {
    'ID': '276',
    'Group': 'IT Support Staff',
    'Name': 'Mara Taylor',
    'Phone': '8-676-662-0662',
  },
  {
    'ID': '277',
    'Group': 'Global Logistics Supervisor',
    'Name': 'Priscilla Owens',
    'Phone': '2-253-384-5585',
  },
  {
    'ID': '278',
    'Group': 'Health Educator',
    'Name': 'Daron Spencer',
    'Phone': '7-162-115-6438',
  },
  {
    'ID': '279',
    'Group': 'CNC Operator',
    'Name': 'Mark Lewis',
    'Phone': '0-876-882-0803',
  },
  {
    'ID': '280',
    'Group': 'Investment  Advisor',
    'Name': 'Erick Mcnally',
    'Phone': '6-866-705-3785',
  },
  {
    'ID': '281',
    'Group': 'Business Broker',
    'Name': 'Ember Weasley',
    'Phone': '7-434-750-5315',
  },
  {
    'ID': '282',
    'Group': 'Operator',
    'Name': 'Sebastian Gunn',
    'Phone': '0-372-504-2404',
  },
  {
    'ID': '283',
    'Group': 'Project Manager',
    'Name': 'Courtney Reynolds',
    'Phone': '3-103-276-6846',
  },
  {
    'ID': '284',
    'Group': 'Cash Manager',
    'Name': 'Adeline Jenkins',
    'Phone': '0-610-826-7343',
  },
  {
    'ID': '285',
    'Group': 'HR Coordinator',
    'Name': 'Rowan Talbot',
    'Phone': '0-071-740-3872',
  },
  {
    'ID': '286',
    'Group': 'Auditor',
    'Name': 'Mike Kelly',
    'Phone': '6-162-073-0705',
  },
  {
    'ID': '287',
    'Group': 'Production Painter',
    'Name': 'Doug Cassidy',
    'Phone': '5-725-453-1668',
  },
  {
    'ID': '288',
    'Group': 'Associate Professor',
    'Name': 'Rylee Griffiths',
    'Phone': '5-704-614-5446',
  },
  {
    'ID': '289',
    'Group': 'HR Specialist',
    'Name': 'Chester Cunningham',
    'Phone': '1-438-233-2223',
  },
  {
    'ID': '290',
    'Group': 'HR Specialist',
    'Name': 'Kaylee Russell',
    'Phone': '4-171-372-1271',
  },
  {
    'ID': '291',
    'Group': 'Bookkeeper',
    'Name': 'Carissa Gonzales',
    'Phone': '5-385-448-2821',
  },
  {
    'ID': '292',
    'Group': 'Executive Director',
    'Name': 'Laila Gray',
    'Phone': '1-403-041-7637',
  },
  {
    'ID': '293',
    'Group': 'Retail Trainee',
    'Name': 'Javier Glynn',
    'Phone': '1-514-680-3055',
  },
  {
    'ID': '294',
    'Group': 'Banker',
    'Name': 'Doug Gilbert',
    'Phone': '1-587-561-3023',
  },
  {
    'ID': '295',
    'Group': 'Associate Professor',
    'Name': 'Chester Weston',
    'Phone': '1-617-053-1431',
  },
  {
    'ID': '296',
    'Group': 'Dentist',
    'Name': 'Felicity Young',
    'Phone': '6-274-123-3430',
  },
  {
    'ID': '297',
    'Group': 'Steward',
    'Name': 'Daron Henderson',
    'Phone': '3-623-476-1757',
  },
  {
    'ID': '298',
    'Group': 'IT Support Staff',
    'Name': 'Peter Ellison',
    'Phone': '5-044-516-6836',
  },
  {
    'ID': '299',
    'Group': 'Clerk',
    'Name': 'Luke Russell',
    'Phone': '3-271-836-6358',
  },
  {
    'ID': '300',
    'Group': 'Inspector',
    'Name': 'Eileen Gray',
    'Phone': '6-870-686-4616',
  },
  {
    'ID': '301',
    'Group': 'Accountant',
    'Name': 'Nicole Warden',
    'Phone': '4-167-145-2408',
  },
  {
    'ID': '302',
    'Group': 'Laboratory Technician',
    'Name': 'Emma Noon',
    'Phone': '0-665-664-4505',
  },
  {
    'ID': '303',
    'Group': 'Steward',
    'Name': 'Nicole Coates',
    'Phone': '2-375-063-1670',
  },
  {
    'ID': '304',
    'Group': 'Baker',
    'Name': 'Aileen Ballard',
    'Phone': '6-550-183-6280',
  },
  {
    'ID': '305',
    'Group': 'Pharmacist',
    'Name': 'Mandy Robinson',
    'Phone': '6-532-744-4775',
  },
];

console.log('Server started on localhost:8080');
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/main', function(req, res) {
  req.body.get === 'users' && res.send(users);
});

app.listen(8080);
