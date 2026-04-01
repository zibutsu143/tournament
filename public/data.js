// Tournament Bracket Data structure (Derived from Schedule)
        const matchData = [
            // Round of 32 (Race to 7)
            { id: 'R32-1', round: 1, p1: '1st Group A', p2: '2nd Group P', time: '06-Apr 18:30', race: 7, next: 'R16-1' },
            { id: 'R32-2', round: 1, p1: '1st Group B', p2: '2nd Group O', time: '06-Apr 18:30', race: 7, next: 'R16-1' },
            { id: 'R32-3', round: 1, p1: '1st Group C', p2: '2nd Group N', time: '06-Apr 18:30', race: 7, next: 'R16-2' },
            { id: 'R32-4', round: 1, p1: '1st Group D', p2: '2nd Group M', time: '06-Apr 18:30', race: 7, next: 'R16-2' },
            { id: 'R32-5', round: 1, p1: '1st Group E', p2: '2nd Group L', time: '06-Apr 18:30', race: 7, next: 'R16-3' },
            { id: 'R32-6', round: 1, p1: '1st Group F', p2: '2nd Group K', time: '06-Apr 18:30', race: 7, next: 'R16-3' },
            { id: 'R32-7', round: 1, p1: '1st Group G', p2: '2nd Group J', time: '06-Apr 18:30', race: 7, next: 'R16-4' },
            { id: 'R32-8', round: 1, p1: '1st Group H', p2: '2nd Group I', time: '06-Apr 18:30', race: 7, next: 'R16-4' },
            { id: 'R32-9', round: 1, p1: '1st Group I', p2: '2nd Group H', time: '06-Apr 20:30', race: 7, next: 'R16-5' },
            { id: 'R32-10', round: 1, p1: '1st Group J', p2: '2nd Group G', time: '06-Apr 20:30', race: 7, next: 'R16-5' },
            { id: 'R32-11', round: 1, p1: '1st Group K', p2: '2nd Group F', time: '06-Apr 20:30', race: 7, next: 'R16-6' },
            { id: 'R32-12', round: 1, p1: '1st Group L', p2: '2nd Group E', time: '06-Apr 20:30', race: 7, next: 'R16-6' },
            { id: 'R32-13', round: 1, p1: '1st Group M', p2: '2nd Group D', time: '06-Apr 20:30', race: 7, next: 'R16-7' },
            { id: 'R32-14', round: 1, p1: '1st Group N', p2: '2nd Group C', time: '06-Apr 20:30', race: 7, next: 'R16-7' },
            { id: 'R32-15', round: 1, p1: '1st Group O', p2: '2nd Group B', time: '06-Apr 20:30', race: 7, next: 'R16-8' },
            { id: 'R32-16', round: 1, p1: '1st Group P', p2: '2nd Group A', time: '06-Apr 20:30', race: 7, next: 'R16-8' },

            // Round of 16 (Race to 7)
            { id: 'R16-1', round: 2, p1: 'Winner R32-1', p2: 'Winner R32-2', time: '06-Apr 22:30', race: 7, next: 'QTR-1' },
            { id: 'R16-2', round: 2, p1: 'Winner R32-3', p2: 'Winner R32-4', time: '06-Apr 22:30', race: 7, next: 'QTR-1' },
            { id: 'R16-3', round: 2, p1: 'Winner R32-5', p2: 'Winner R32-6', time: '06-Apr 22:30', race: 7, next: 'QTR-2' },
            { id: 'R16-4', round: 2, p1: 'Winner R32-7', p2: 'Winner R32-8', time: '06-Apr 22:30', race: 7, next: 'QTR-2' },
            { id: 'R16-5', round: 2, p1: 'Winner R32-9', p2: 'Winner R32-10', time: '06-Apr 22:30', race: 7, next: 'QTR-3' },
            { id: 'R16-6', round: 2, p1: 'Winner R32-11', p2: 'Winner R32-12', time: '06-Apr 22:30', race: 7, next: 'QTR-3' },
            { id: 'R16-7', round: 2, p1: 'Winner R32-13', p2: 'Winner R32-14', time: '06-Apr 22:30', race: 7, next: 'QTR-4' },
            { id: 'R16-8', round: 2, p1: 'Winner R32-15', p2: 'Winner R32-16', time: '06-Apr 22:30', race: 7, next: 'QTR-4' },

            // Quarter-Finals (Race to 7)
            { id: 'QTR-1', round: 3, p1: 'Winner R16-1', p2: 'Winner R16-2', time: '07-Apr 19:00', race: 7, next: 'SF-1' },
            { id: 'QTR-2', round: 3, p1: 'Winner R16-3', p2: 'Winner R16-4', time: '07-Apr 19:00', race: 7, next: 'SF-1' },
            { id: 'QTR-3', round: 3, p1: 'Winner R16-5', p2: 'Winner R16-6', time: '07-Apr 19:00', race: 7, next: 'SF-2' },
            { id: 'QTR-4', round: 3, p1: 'Winner R16-7', p2: 'Winner R16-8', time: '07-Apr 19:00', race: 7, next: 'SF-2' },

            // Semi-Finals (Race to 7)
            { id: 'SF-1', round: 4, p1: 'Winner QTR-1', p2: 'Winner QTR-2', time: '07-Apr 22:00', race: 7, next: 'F-1' },
            { id: 'SF-2', round: 4, p1: 'Winner QTR-3', p2: 'Winner QTR-4', time: '07-Apr 22:00', race: 7, next: 'F-1' },

            // Final (Race to 9)
            { id: 'F-1', round: 5, p1: 'Winner SF-1', p2: 'Winner SF-2', time: '08-Apr 20:15', race: 9, next: null },
        ];

        // --- Player Schedule Logic ---

        // Roster of all participating players with their Group IDs
        const playerGroupIDs = {
            "Ali Fayaz": "A5", "Salim Adnan": "A6", "Sayyah Abbas": "A3", "Mohamed Shareef": "A8",
            "Mohamed Ibrahim": "A4", "Muazzin Naseem": "A7", "Ahmed Muizzu": "A2", "Soffan Shakir": "A1",
            "Ismail Fazeel": "B1", "Maaz Abdulla": "B6", "Abdulla Afeef": "B2", "Rudolf Lubbe": "B5",
            "Mohamed Shifan": "B3", "Ahmed Afrah Ismail": "B4", "Mohamed Nafaau": "B7",
            "Ismail Suwaidh": "C1", "Ibrahim Riyaz": "C6", "Ibrahim Dhaws": "C2", "Naajih Rasheed": "C5",
            "Mohamed Saahil Hameed": "C3", "Aminath Haleem": "C4", "Ibrahim Sharuwan": "C7",
            "Abdulla Nasif": "D1", "Badruddeen Naseem": "D6", "Mohamed Sameer": "D2", "Aishath Salha Mohamed": "D5",
            "Mohamed Fareem": "D3", "Shadhoog Ahmed": "D4", "Ibrahim Haneef": "D7",
            "Ismail Shiyam": "E1", "Ahsan Luthufy": "E6", "Abdulla Simaau": "E2", "Raaidh yoosuf": "E5",
            "Ahmed Shihad": "E3", "Deena Ahmed": "E4", "Ibrahim Rasheed (MNDF)": "E7",
            "Ahmed Ziyau Saeed": "F1", "Hassan Zayyan": "F6", "Fathimath Shahula Nashid": "F2", "Hassan Shaz Mohamed": "F5",
            "Abdulla Suneed": "F3", "Ahmed Naseer": "F4", "Ibrahim Shareef": "F7",
            "Ismail Nashid": "G1", "Ahmed Fayaz": "G6", "Hussain Shimal": "G2", "Ibrahim Ziyau": "G5",
            "Mohamed Dhunnyaz": "G3", "Hassan Mohamed (MACL)": "G4", "Ali Shaffaf": "G7",
            "Mohamed Aksam Waheed": "H5", "Ahmed Ramzy": "H6", "Ali Hilmy": "H3", "Mohamed Mauroof": "H8",
            "Ali Nahuzan Hanim": "H4", "Abdullah Naisam Ismail": "H7", "Ilaan Mohamed Shareef": "H2", "Ibrahim Lufaaf Shafee": "H1",
            "Ahusan Hashim": "I5", "Mohamed Jinaan Abdulla": "I6", "Shiyana Ahmed Zuhair": "I3", "Shazeen Abdul Samad": "I8",
            "Ahmed Mahid": "I4", "Ahmed Safwath": "I7", "Abdulla Hameez": "I2", "Mohamed Fathuhy": "I1",
            "Yoosuf Zubair": "J1", "Fathuhulla Jameel": "J6", "Uthusiyya Thaufeeg": "J2", "Ali Mimhaad": "J5",
            "Ahmed Faris Faroog": "J3", "Ahmed Naizan Zameel": "J4", "Abdul Hameed Ali": "J7",
            "Anas Mohamed": "K1", "Hussain Saneef": "K6", "Hussain Hameem": "K2", "Hassan Rajesh Moosa": "K5",
            "Ali Wasif": "K3", "Hussain Sammaan": "K4", "Aminath Azeema": "K7",
            "Ahmed Shareef Hussain": "L1", "Mohamed Haani": "L6", "Mamdhooh ibrahim": "L2", "Mohamed Hamdhoon": "L5",
            "Mariyam Jasra Ahmed": "L3", "Ismail Razeen": "L4", "Mohamed Sahin": "L7",
            "Fathimath Raufa Moh. Hafiz": "M1", "Ahmed Nifaah Ibrahim": "M6", "Mikyaal Mohamed Miushad": "M2", "Ahmed Gasim": "M5",
            "Abdul Basith Abdul Samad": "M3", "Hussain Fayaz": "M4", "Moosa Samiu": "M7",
            "Eaman Moosa": "N1", "Ali Shawin": "N6", "Ahmed Aleem": "N2", "Aishath Ali": "N5",
            "Ahmed Saeed": "N3", "Mohamed Shamikh Ibrahim": "N4", "Aminath Azra": "N7",
            "Ahmed Munjid": "O1", "Abdulla Mohamed": "O6", "Hussain Rizam": "O2", "Abbas Saeed": "O5",
            "Hussain Sajidhullah": "O3", "Ibrahim Rasheed (IAS)": "O4", "Mohamed Nabeeh": "O7",
            "Ismail Jeehan": "P5", "Ismail Mumthaz": "P6", "Aiman Mohamed": "P3", "Mohamed Anish Ilyas": "P8",
            "Hassan Mohamed": "P4", "Mohamed Hameem": "P7", "Fageeha Ibrahim": "P2", "Mohamed Shabuaan Shafeeg": "P1"
        };

        const rawToFormatted = {};
        Object.entries(playerGroupIDs).forEach(([name, id]) => {
            rawToFormatted[name] = `${id} - ${name}`;
        });
        const allFormattedPlayers = Object.values(rawToFormatted).sort();

        // Condensed group stage matches data (ID, Date, Time, Table, Player 1, Player 2)
        const groupStageCSV = `1,01-Apr,19:00,1,Ali Fayaz,Salim Adnan
2,01-Apr,19:00,2,Sayyah Abbas,Mohamed Shareef
3,01-Apr,19:00,3,Mohamed Ibrahim,Muazzin Naseem
4,01-Apr,19:00,4,Mohamed Aksam Waheed,Ahmed Ramzy
5,01-Apr,19:00,5,Ali Hilmy,Mohamed Mauroof
6,01-Apr,19:00,6,Ali Nahuzan Hanim,Abdullah Naisam Ismail
7,01-Apr,19:00,7,Ahusan Hashim,Mohamed Jinaan Abdulla
8,01-Apr,19:00,8,Shiyana Ahmed Zuhair,Shazeen Abdul Samad
9,01-Apr,19:00,9,Ahmed Mahid,Ahmed Safwath
10,01-Apr,19:00,10,Ismail Jeehan,Ismail Mumthaz
11,01-Apr,19:00,11,Aiman Mohamed,Mohamed Anish Ilyas
12,01-Apr,19:00,12,Hassan Mohamed,Mohamed Hameem
13,01-Apr,20:00,1,Ismail Fazeel,Maaz Abdulla
14,01-Apr,20:00,2,Ismail Suwaidh,Ibrahim Riyaz
15,01-Apr,20:00,3,Abdulla Nasif,Badruddeen Naseem
16,01-Apr,20:00,4,Ismail Shiyam,Ahsan Luthufy
17,01-Apr,20:00,5,Ahmed Ziyau Saeed,Hassan Zayyan
18,01-Apr,20:00,6,Ismail Nashid,Ahmed Fayaz
19,01-Apr,20:00,7,Yoosuf Zubair,Fathuhulla Jameel
20,01-Apr,20:00,8,Anas Mohamed,Hussain Saneef
21,01-Apr,20:00,9,Ahmed Shareef Hussain,Mohamed Haani
22,01-Apr,20:00,10,Fathimath Raufa Moh. Hafiz,Ahmed Nifaah Ibrahim
23,01-Apr,20:00,11,Eaman Moosa,Ali Shawin
24,01-Apr,20:00,12,Ahmed Munjid,Abdulla Mohamed
25,01-Apr,21:00,4,Mohamed Shareef,Salim Adnan
26,01-Apr,21:00,5,Ahmed Muizzu,Soffan Shakir
27,01-Apr,21:00,6,Sayyah Abbas,Mohamed Ibrahim
28,01-Apr,21:00,7,Mohamed Mauroof,Ahmed Ramzy
29,01-Apr,21:00,8,Ilaan Mohamed Shareef,Ibrahim Lufaaf Shafee
30,01-Apr,21:00,9,Ali Hilmy,Ali Nahuzan Hanim
31,01-Apr,21:00,10,Shazeen Abdul Samad,Mohamed Jinaan Abdulla
32,01-Apr,21:00,11,Abdulla Hameez,Mohamed Fathuhy
33,01-Apr,21:00,12,Shiyana Ahmed Zuhair,Ahmed Mahid
34,01-Apr,21:00,1,Mohamed Anish Ilyas,Ismail Mumthaz
35,01-Apr,21:00,2,Fageeha Ibrahim,Mohamed Shabuaan Shafeeg
36,01-Apr,21:00,3,Aiman Mohamed,Hassan Mohamed
37,01-Apr,22:00,2,Abdulla Afeef,Rudolf Lubbe
38,01-Apr,22:00,3,Ibrahim Dhaws,Naajih Rasheed
39,01-Apr,22:00,4,Mohamed Sameer,Aishath Salha Mohamed
40,01-Apr,22:00,5,Abdulla Simaau,Raaidh yoosuf
41,01-Apr,22:00,6,Fathimath Shahula Nashid,Hassan Shaz Mohamed
42,01-Apr,22:00,7,Hussain Shimal,Ibrahim Ziyau
43,01-Apr,22:00,8,Uthusiyya Thaufeeg,Ali Mimhaad
44,01-Apr,22:00,9,Hussain Hameem,Hassan Rajesh Moosa
45,01-Apr,22:00,10,Mamdhooh ibrahim,Mohamed Hamdhoon
46,01-Apr,22:00,11,Mikyaal Mohamed Miushad,Ahmed Gasim
47,01-Apr,22:00,12,Ahmed Aleem,Aishath Ali
48,01-Apr,22:00,1,Hussain Rizam,Abbas Saeed
49,01-Apr,23:00,7,Ahmed Muizzu,Ali Fayaz
50,01-Apr,23:00,8,Soffan Shakir,Muazzin Naseem
51,01-Apr,23:00,9,Mohamed Shareef,Mohamed Ibrahim
52,01-Apr,23:00,10,Ilaan Mohamed Shareef,Mohamed Aksam Waheed
53,01-Apr,23:00,11,Ibrahim Lufaaf Shafee,Abdullah Naisam Ismail
54,01-Apr,23:00,12,Mohamed Mauroof,Ali Nahuzan Hanim
55,01-Apr,23:00,1,Abdulla Hameez,Ahusan Hashim
56,01-Apr,23:00,2,Mohamed Fathuhy,Ahmed Safwath
57,01-Apr,23:00,3,Shazeen Abdul Samad,Ahmed Mahid
58,01-Apr,23:00,4,Fageeha Ibrahim,Ismail Jeehan
59,01-Apr,23:00,5,Mohamed Shabuaan Shafeeg,Mohamed Hameem
60,01-Apr,23:00,6,Mohamed Anish Ilyas,Hassan Mohamed
61,02-Apr,17:00,7,Muazzin Naseem,Mohamed Shareef
62,02-Apr,17:00,8,Salim Adnan,Ahmed Muizzu
63,02-Apr,17:00,9,Mohamed Shifan,Ahmed Afrah Ismail
64,02-Apr,17:00,10,Rudolf Lubbe,Ismail Fazeel
65,02-Apr,17:00,11,Mohamed Saahil Hameed,Aminath Haleem
66,02-Apr,17:00,12,Naajih Rasheed,Ismail Suwaidh
67,02-Apr,17:00,1,Mohamed Fareem,Shadhoog Ahmed
68,02-Apr,17:00,2,Aishath Salha Mohamed,Abdulla Nasif
69,02-Apr,17:00,3,Ahmed Shihad,Deena Ahmed
70,02-Apr,17:00,4,Raaidh yoosuf,Ismail Shiyam
71,02-Apr,17:00,5,Abdulla Suneed,Ahmed Naseer
72,02-Apr,17:00,6,Hassan Shaz Mohamed,Ahmed Ziyau Saeed
73,02-Apr,18:00,1,Mohamed Dhunnyaz,Hassan Mohamed (MACL)
74,02-Apr,18:00,2,Ibrahim Ziyau,Ismail Nashid
75,02-Apr,18:00,3,Abdullah Naisam Ismail,Mohamed Mauroof
76,02-Apr,18:00,4,Ahmed Ramzy,Ilaan Mohamed Shareef
77,02-Apr,18:00,5,Ahmed Safwath,Shazeen Abdul Samad
78,02-Apr,18:00,6,Mohamed Jinaan Abdulla,Abdulla Hameez
79,02-Apr,18:00,7,Ahmed Faris Faroog,Ahmed Naizan Zameel
80,02-Apr,18:00,8,Ali Mimhaad,Yoosuf Zubair
81,02-Apr,18:00,9,Ali Wasif,Hussain Sammaan
82,02-Apr,18:00,10,Hassan Rajesh Moosa,Anas Mohamed
83,02-Apr,18:00,11,Mariyam Jasra Ahmed,Ismail Razeen
84,02-Apr,18:00,12,Mohamed Hamdhoon,Ahmed Shareef Hussain
85,02-Apr,19:00,1,Abdul Basith Abdul Samad,Hussain Fayaz
86,02-Apr,19:00,2,Ahmed Gasim,Fathimath Raufa Moh. Hafiz
87,02-Apr,19:00,3,Ahmed Saeed,Mohamed Shamikh Ibrahim
88,02-Apr,19:00,4,Aishath Ali,Eaman Moosa
89,02-Apr,19:00,5,Hussain Sajidhullah,Ibrahim Rasheed (IAS)
90,02-Apr,19:00,6,Abbas Saeed,Ahmed Munjid
91,02-Apr,19:00,7,Mohamed Hameem,Mohamed Anish Ilyas
92,02-Apr,19:00,8,Ismail Mumthaz,Fageeha Ibrahim
93,02-Apr,19:00,9,Mohamed Ibrahim,Ahmed Muizzu
94,02-Apr,19:00,10,Salim Adnan,Soffan Shakir
95,02-Apr,19:00,11,Ahmed Afrah Ismail,Abdulla Afeef
96,02-Apr,19:00,12,Maaz Abdulla,Mohamed Nafaau
97,02-Apr,20:00,4,Aminath Haleem,Ibrahim Dhaws
98,02-Apr,20:00,5,Ibrahim Riyaz,Ibrahim Sharuwan
99,02-Apr,20:00,6,Shadhoog Ahmed,Mohamed Sameer
100,02-Apr,20:00,7,Badruddeen Naseem,Ibrahim Haneef
101,02-Apr,20:00,8,Deena Ahmed,Abdulla Simaau
102,02-Apr,20:00,9,Ahsan Luthufy,Ibrahim Rasheed (MNDF)
103,02-Apr,20:00,10,Ahmed Naseer,Fathimath Shahula Nashid
104,02-Apr,20:00,11,Hassan Zayyan,Ibrahim Shareef
105,02-Apr,20:00,12,Hassan Mohamed (MACL),Hussain Shimal
106,02-Apr,20:00,1,Ahmed Fayaz,Ali Shaffaf
107,02-Apr,20:00,2,Ali Nahuzan Hanim,Ilaan Mohamed Shareef
108,02-Apr,20:00,3,Ahmed Ramzy,Ibrahim Lufaaf Shafee
109,02-Apr,21:00,2,Ahmed Mahid,Abdulla Hameez
110,02-Apr,21:00,3,Mohamed Jinaan Abdulla,Mohamed Fathuhy
111,02-Apr,21:00,4,Ahmed Naizan Zameel,Uthusiyya Thaufeeg
112,02-Apr,21:00,5,Fathuhulla Jameel,Abdul Hameed Ali
113,02-Apr,21:00,6,Hussain Sammaan,Hussain Hameem
114,02-Apr,21:00,7,Hussain Saneef,Aminath Azeema
115,02-Apr,21:00,8,Ismail Razeen,Mamdhooh ibrahim
116,02-Apr,21:00,9,Mohamed Haani,Mohamed Sahin
117,02-Apr,21:00,10,Hussain Fayaz,Mikyaal Mohamed Miushad
118,02-Apr,21:00,11,Ahmed Nifaah Ibrahim,Moosa Samiu
119,02-Apr,21:00,12,Mohamed Shamikh Ibrahim,Ahmed Aleem
120,02-Apr,21:00,1,Ali Shawin,Aminath Azra
121,02-Apr,22:00,7,Ibrahim Rasheed (IAS),Hussain Rizam
122,02-Apr,22:00,8,Abdulla Mohamed,Mohamed Nabeeh
123,02-Apr,22:00,9,Hassan Mohamed,Fageeha Ibrahim
124,02-Apr,22:00,10,Ismail Mumthaz,Mohamed Shabuaan Shafeeg
125,02-Apr,22:00,11,Mohamed Ibrahim,Soffan Shakir
126,02-Apr,22:00,12,Ali Fayaz,Sayyah Abbas
127,02-Apr,22:00,1,Abdulla Afeef,Mohamed Nafaau
128,02-Apr,22:00,2,Mohamed Shifan,Maaz Abdulla
129,02-Apr,22:00,3,Ibrahim Dhaws,Ibrahim Sharuwan
130,02-Apr,22:00,4,Mohamed Saahil Hameed,Ibrahim Riyaz
131,02-Apr,22:00,5,Mohamed Sameer,Ibrahim Haneef
132,02-Apr,22:00,6,Mohamed Fareem,Badruddeen Naseem
133,02-Apr,23:00,7,Abdulla Simaau,Ibrahim Rasheed (MNDF)
134,02-Apr,23:00,8,Ahmed Shihad,Ahsan Luthufy
135,02-Apr,23:00,9,Fathimath Shahula Nashid,Ibrahim Shareef
136,02-Apr,23:00,10,Abdulla Suneed,Hassan Zayyan
137,02-Apr,23:00,11,Hussain Shimal,Ali Shaffaf
138,02-Apr,23:00,12,Mohamed Dhunnyaz,Ahmed Fayaz
139,02-Apr,23:00,1,Ali Nahuzan Hanim,Ibrahim Lufaaf Shafee
140,02-Apr,23:00,2,Mohamed Aksam Waheed,Ali Hilmy
141,02-Apr,23:00,3,Ahmed Mahid,Mohamed Fathuhy
142,02-Apr,23:00,4,Ahusan Hashim,Shiyana Ahmed Zuhair
143,02-Apr,23:00,5,Uthusiyya Thaufeeg,Abdul Hameed Ali
144,02-Apr,23:00,6,Ahmed Faris Faroog,Fathuhulla Jameel
145,03-Apr,16:00,1,Hussain Hameem,Aminath Azeema
146,03-Apr,16:00,2,Ali Wasif,Hussain Saneef
147,03-Apr,16:00,3,Mamdhooh ibrahim,Mohamed Sahin
148,03-Apr,16:00,4,Mariyam Jasra Ahmed,Mohamed Haani
149,03-Apr,16:00,5,Mikyaal Mohamed Miushad,Moosa Samiu
150,03-Apr,16:00,6,Abdul Basith Abdul Samad,Ahmed Nifaah Ibrahim
151,03-Apr,16:00,7,Ahmed Aleem,Aminath Azra
152,03-Apr,16:00,8,Ahmed Saeed,Ali Shawin
153,03-Apr,16:00,9,Hussain Rizam,Mohamed Nabeeh
154,03-Apr,16:00,10,Hussain Sajidhullah,Abdulla Mohamed
155,03-Apr,16:00,11,Hassan Mohamed,Mohamed Shabuaan Shafeeg
156,03-Apr,16:00,12,Ismail Jeehan,Aiman Mohamed
157,03-Apr,17:00,1,Mohamed Shareef,Ahmed Muizzu
158,03-Apr,17:00,2,Maaz Abdulla,Ahmed Afrah Ismail
159,03-Apr,17:00,3,Ibrahim Riyaz,Aminath Haleem
160,03-Apr,17:00,4,Badruddeen Naseem,Shadhoog Ahmed
161,03-Apr,17:00,5,Ahsan Luthufy,Deena Ahmed
162,03-Apr,17:00,6,Hassan Zayyan,Ahmed Naseer
163,03-Apr,17:00,7,Ahmed Fayaz,Hassan Mohamed (MACL)
164,03-Apr,17:00,8,Mohamed Mauroof,Ilaan Mohamed Shareef
165,03-Apr,17:00,9,Shazeen Abdul Samad,Abdulla Hameez
166,03-Apr,17:00,10,Fathuhulla Jameel,Ahmed Naizan Zameel
167,03-Apr,17:00,11,Hussain Saneef,Hussain Sammaan
168,03-Apr,17:00,12,Mohamed Haani,Ismail Razeen
169,03-Apr,18:00,4,Ahmed Nifaah Ibrahim,Hussain Fayaz
170,03-Apr,18:00,5,Ali Shawin,Mohamed Shamikh Ibrahim
171,03-Apr,18:00,6,Abdulla Mohamed,Ibrahim Rasheed (IAS)
172,03-Apr,18:00,7,Mohamed Anish Ilyas,Fageeha Ibrahim
173,03-Apr,18:00,8,Muazzin Naseem,Ali Fayaz
174,03-Apr,18:00,9,Ahmed Muizzu,Sayyah Abbas
175,03-Apr,18:00,10,Ahmed Afrah Ismail,Rudolf Lubbe
176,03-Apr,18:00,11,Mohamed Shifan,Ismail Fazeel
177,03-Apr,18:00,12,Aminath Haleem,Naajih Rasheed
178,03-Apr,18:00,1,Mohamed Saahil Hameed,Ismail Suwaidh
179,03-Apr,18:00,2,Shadhoog Ahmed,Aishath Salha Mohamed
180,03-Apr,18:00,3,Mohamed Fareem,Abdulla Nasif
181,03-Apr,19:00,2,Deena Ahmed,Raaidh yoosuf
182,03-Apr,19:00,3,Ahmed Shihad,Ismail Shiyam
183,03-Apr,19:00,4,Ahmed Naseer,Hassan Shaz Mohamed
184,03-Apr,19:00,5,Abdulla Suneed,Ahmed Ziyau Saeed
185,03-Apr,19:00,6,Hassan Mohamed (MACL),Ibrahim Ziyau
186,03-Apr,19:00,7,Mohamed Dhunnyaz,Ismail Nashid
187,03-Apr,19:00,8,Abdullah Naisam Ismail,Mohamed Aksam Waheed
188,03-Apr,19:00,9,Ilaan Mohamed Shareef,Ali Hilmy
189,03-Apr,19:00,10,Ahmed Safwath,Ahusan Hashim
190,03-Apr,19:00,11,Abdulla Hameez,Shiyana Ahmed Zuhair
191,03-Apr,19:00,12,Ahmed Naizan Zameel,Ali Mimhaad
192,03-Apr,19:00,1,Ahmed Faris Faroog,Yoosuf Zubair
193,03-Apr,20:00,7,Hussain Sammaan,Hassan Rajesh Moosa
194,03-Apr,20:00,8,Ali Wasif,Anas Mohamed
195,03-Apr,20:00,9,Ismail Razeen,Mohamed Hamdhoon
196,03-Apr,20:00,10,Mariyam Jasra Ahmed,Ahmed Shareef Hussain
197,03-Apr,20:00,11,Hussain Fayaz,Ahmed Gasim
198,03-Apr,20:00,12,Abdul Basith Abdul Samad,Fathimath Raufa Moh. Hafiz
199,03-Apr,20:00,1,Mohamed Shamikh Ibrahim,Aishath Ali
200,03-Apr,20:00,2,Ahmed Saeed,Eaman Moosa
201,03-Apr,20:00,3,Ibrahim Rasheed (IAS),Abbas Saeed
202,03-Apr,20:00,4,Hussain Sajidhullah,Ahmed Munjid
203,03-Apr,20:00,5,Mohamed Hameem,Ismail Jeehan
204,03-Apr,20:00,6,Fageeha Ibrahim,Aiman Mohamed
205,03-Apr,21:00,7,Soffan Shakir,Sayyah Abbas
206,03-Apr,21:00,8,Ali Fayaz,Mohamed Shareef
207,03-Apr,21:00,9,Maaz Abdulla,Abdulla Afeef
208,03-Apr,21:00,10,Mohamed Nafaau,Ismail Fazeel
209,03-Apr,21:00,11,Ibrahim Riyaz,Ibrahim Dhaws
210,03-Apr,21:00,12,Ibrahim Sharuwan,Ismail Suwaidh
211,03-Apr,21:00,1,Badruddeen Naseem,Mohamed Sameer
212,03-Apr,21:00,2,Ibrahim Haneef,Abdulla Nasif
213,03-Apr,21:00,3,Ahsan Luthufy,Abdulla Simaau
214,03-Apr,21:00,4,Ibrahim Rasheed (MNDF),Ismail Shiyam
215,03-Apr,21:00,5,Hassan Zayyan,Fathimath Shahula Nashid
216,03-Apr,21:00,6,Ibrahim Shareef,Ahmed Ziyau Saeed
217,03-Apr,22:00,1,Ahmed Fayaz,Hussain Shimal
218,03-Apr,22:00,2,Ali Shaffaf,Ismail Nashid
219,03-Apr,22:00,3,Ibrahim Lufaaf Shafee,Ali Hilmy
220,03-Apr,22:00,4,Mohamed Aksam Waheed,Mohamed Mauroof
221,03-Apr,22:00,5,Mohamed Fathuhy,Shiyana Ahmed Zuhair
222,03-Apr,22:00,6,Ahusan Hashim,Shazeen Abdul Samad
223,03-Apr,22:00,7,Fathuhulla Jameel,Uthusiyya Thaufeeg
224,03-Apr,22:00,8,Abdul Hameed Ali,Yoosuf Zubair
225,03-Apr,22:00,9,Hussain Saneef,Hussain Hameem
226,03-Apr,22:00,10,Aminath Azeema,Anas Mohamed
227,03-Apr,22:00,11,Mohamed Haani,Mamdhooh ibrahim
228,03-Apr,22:00,12,Mohamed Sahin,Ahmed Shareef Hussain
229,03-Apr,23:00,1,Ahmed Nifaah Ibrahim,Mikyaal Mohamed Miushad
230,03-Apr,23:00,2,Moosa Samiu,Fathimath Raufa Moh. Hafiz
231,03-Apr,23:00,3,Ali Shawin,Ahmed Aleem
232,03-Apr,23:00,4,Aminath Azra,Eaman Moosa
233,03-Apr,23:00,5,Abdulla Mohamed,Hussain Rizam
234,03-Apr,23:00,6,Mohamed Nabeeh,Ahmed Munjid
235,03-Apr,23:00,7,Mohamed Shabuaan Shafeeg,Aiman Mohamed
236,03-Apr,23:00,8,Ismail Jeehan,Mohamed Anish Ilyas
237,03-Apr,23:00,9,Mohamed Shareef,Soffan Shakir
238,03-Apr,23:00,10,Salim Adnan,Muazzin Naseem
239,03-Apr,23:00,11,Rudolf Lubbe,Mohamed Shifan
240,03-Apr,23:00,12,Ahmed Afrah Ismail,Mohamed Nafaau
241,04-Apr,17:00,4,Naajih Rasheed,Mohamed Saahil Hameed
242,04-Apr,17:00,5,Aminath Haleem,Ibrahim Sharuwan
243,04-Apr,17:00,6,Aishath Salha Mohamed,Mohamed Fareem
244,04-Apr,17:00,7,Shadhoog Ahmed,Ibrahim Haneef
245,04-Apr,17:00,8,Raaidh yoosuf,Ahmed Shihad
246,04-Apr,17:00,9,Deena Ahmed,Ibrahim Rasheed (MNDF)
247,04-Apr,17:00,10,Hassan Shaz Mohamed,Abdulla Suneed
248,04-Apr,17:00,11,Ahmed Naseer,Ibrahim Shareef
249,04-Apr,17:00,12,Ibrahim Ziyau,Mohamed Dhunnyaz
250,04-Apr,17:00,1,Hassan Mohamed (MACL),Ali Shaffaf
251,04-Apr,17:00,2,Mohamed Mauroof,Ibrahim Lufaaf Shafee
252,04-Apr,17:00,3,Ahmed Ramzy,Abdullah Naisam Ismail
253,04-Apr,18:00,2,Shazeen Abdul Samad,Mohamed Fathuhy
254,04-Apr,18:00,3,Mohamed Jinaan Abdulla,Ahmed Safwath
255,04-Apr,18:00,4,Ali Mimhaad,Ahmed Faris Faroog
256,04-Apr,18:00,5,Ahmed Naizan Zameel,Abdul Hameed Ali
257,04-Apr,18:00,6,Hassan Rajesh Moosa,Ali Wasif
258,04-Apr,18:00,7,Hussain Sammaan,Aminath Azeema
259,04-Apr,18:00,8,Mohamed Hamdhoon,Mariyam Jasra Ahmed
260,04-Apr,18:00,9,Ismail Razeen,Mohamed Sahin
261,04-Apr,18:00,10,Ahmed Gasim,Abdul Basith Abdul Samad
262,04-Apr,18:00,11,Hussain Fayaz,Moosa Samiu
263,04-Apr,18:00,12,Aishath Ali,Ahmed Saeed
264,04-Apr,18:00,1,Mohamed Shamikh Ibrahim,Aminath Azra
265,04-Apr,19:00,7,Abbas Saeed,Hussain Sajidhullah
266,04-Apr,19:00,8,Ibrahim Rasheed (IAS),Mohamed Nabeeh
267,04-Apr,19:00,9,Mohamed Anish Ilyas,Mohamed Shabuaan Shafeeg
268,04-Apr,19:00,10,Ismail Mumthaz,Mohamed Hameem
269,04-Apr,19:00,11,Sayyah Abbas,Salim Adnan
270,04-Apr,19:00,12,Mohamed Ibrahim,Ali Fayaz
271,04-Apr,19:00,1,Ahmed Muizzu,Muazzin Naseem
272,04-Apr,19:00,2,Rudolf Lubbe,Maaz Abdulla
273,04-Apr,19:00,3,Mohamed Nafaau,Mohamed Shifan
274,04-Apr,19:00,4,Ismail Fazeel,Abdulla Afeef
275,04-Apr,19:00,5,Naajih Rasheed,Ibrahim Riyaz
276,04-Apr,19:00,6,Ibrahim Sharuwan,Mohamed Saahil Hameed
277,04-Apr,20:00,7,Ismail Suwaidh,Ibrahim Dhaws
278,04-Apr,20:00,8,Aishath Salha Mohamed,Badruddeen Naseem
279,04-Apr,20:00,9,Ibrahim Haneef,Mohamed Fareem
280,04-Apr,20:00,10,Abdulla Nasif,Mohamed Sameer
281,04-Apr,20:00,11,Raaidh yoosuf,Ahsan Luthufy
282,04-Apr,20:00,12,Ibrahim Rasheed (MNDF),Ahmed Shihad
283,04-Apr,20:00,1,Ismail Shiyam,Abdulla Simaau
284,04-Apr,20:00,2,Hassan Shaz Mohamed,Hassan Zayyan
285,04-Apr,20:00,3,Ibrahim Shareef,Abdulla Suneed
286,04-Apr,20:00,4,Ahmed Ziyau Saeed,Fathimath Shahula Nashid
287,04-Apr,20:00,5,Ibrahim Ziyau,Ahmed Fayaz
288,04-Apr,20:00,6,Ali Shaffaf,Mohamed Dhunnyaz
289,04-Apr,21:00,1,Ismail Nashid,Hussain Shimal
290,04-Apr,21:00,2,Ali Hilmy,Ahmed Ramzy
291,04-Apr,21:00,3,Ali Nahuzan Hanim,Mohamed Aksam Waheed
292,04-Apr,21:00,4,Ilaan Mohamed Shareef,Abdullah Naisam Ismail
293,04-Apr,21:00,5,Shiyana Ahmed Zuhair,Mohamed Jinaan Abdulla
294,04-Apr,21:00,6,Ahmed Mahid,Ahusan Hashim
295,04-Apr,21:00,7,Abdulla Hameez,Ahmed Safwath
296,04-Apr,21:00,8,Ali Mimhaad,Fathuhulla Jameel
297,04-Apr,21:00,9,Abdul Hameed Ali,Ahmed Faris Faroog
298,04-Apr,21:00,10,Yoosuf Zubair,Uthusiyya Thaufeeg
299,04-Apr,21:00,11,Hassan Rajesh Moosa,Hussain Saneef
300,04-Apr,21:00,12,Aminath Azeema,Ali Wasif
301,04-Apr,22:00,1,Anas Mohamed,Hussain Hameem
302,04-Apr,22:00,2,Mohamed Hamdhoon,Mohamed Haani
303,04-Apr,22:00,3,Mohamed Sahin,Mariyam Jasra Ahmed
304,04-Apr,22:00,4,Ahmed Shareef Hussain,Mamdhooh ibrahim
305,04-Apr,22:00,5,Ahmed Gasim,Ahmed Nifaah Ibrahim
306,04-Apr,22:00,6,Moosa Samiu,Abdul Basith Abdul Samad
307,04-Apr,22:00,7,Fathimath Raufa Moh. Hafiz,Mikyaal Mohamed Miushad
308,04-Apr,22:00,8,Aishath Ali,Ali Shawin
309,04-Apr,22:00,9,Aminath Azra,Ahmed Saeed
310,04-Apr,22:00,10,Eaman Moosa,Ahmed Aleem
311,04-Apr,22:00,11,Abbas Saeed,Abdulla Mohamed
312,04-Apr,22:00,12,Mohamed Nabeeh,Hussain Sajidhullah
313,04-Apr,23:00,4,Ahmed Munjid,Hussain Rizam
314,04-Apr,23:00,5,Aiman Mohamed,Ismail Mumthaz
315,04-Apr,23:00,6,Hassan Mohamed,Ismail Jeehan
316,04-Apr,23:00,7,Fageeha Ibrahim,Mohamed Hameem
317,04-Apr,23:00,8,Muazzin Naseem,Sayyah Abbas
318,04-Apr,23:00,9,Soffan Shakir,Ali Fayaz
319,04-Apr,23:00,10,Salim Adnan,Mohamed Ibrahim
320,04-Apr,23:00,11,Mohamed Nafaau,Rudolf Lubbe
321,04-Apr,23:00,12,Ismail Fazeel,Ahmed Afrah Ismail
322,04-Apr,23:00,1,Abdulla Afeef,Mohamed Shifan
323,05-Apr,19:00,2,Ibrahim Sharuwan,Naajih Rasheed
324,05-Apr,19:00,3,Ismail Suwaidh,Aminath Haleem
325,05-Apr,19:00,2,Ibrahim Dhaws,Mohamed Saahil Hameed
326,05-Apr,19:00,3,Ibrahim Haneef,Aishath Salha Mohamed
327,05-Apr,19:00,4,Abdulla Nasif,Shadhoog Ahmed
328,05-Apr,19:00,5,Mohamed Sameer,Mohamed Fareem
329,05-Apr,19:00,6,Ibrahim Rasheed (MNDF),Raaidh yoosuf
330,05-Apr,19:00,7,Ismail Shiyam,Deena Ahmed
331,05-Apr,19:00,8,Abdulla Simaau,Ahmed Shihad
332,05-Apr,19:00,9,Ibrahim Shareef,Hassan Shaz Mohamed
333,05-Apr,19:00,10,Ahmed Ziyau Saeed,Ahmed Naseer
334,05-Apr,19:00,11,Fathimath Shahula Nashid,Abdulla Suneed
335,05-Apr,20:00,12,Ali Shaffaf,Ibrahim Ziyau
336,05-Apr,20:00,1,Ismail Nashid,Hassan Mohamed (MACL)
337,05-Apr,20:00,7,Hussain Shimal,Mohamed Dhunnyaz
338,05-Apr,20:00,8,Abdullah Naisam Ismail,Ali Hilmy
339,05-Apr,20:00,9,Ibrahim Lufaaf Shafee,Mohamed Aksam Waheed
340,05-Apr,20:00,10,Ahmed Ramzy,Ali Nahuzan Hanim
341,05-Apr,20:00,11,Ahmed Safwath,Shiyana Ahmed Zuhair
342,05-Apr,20:00,12,Mohamed Fathuhy,Ahusan Hashim
343,05-Apr,20:00,1,Mohamed Jinaan Abdulla,Ahmed Mahid
344,05-Apr,20:00,2,Abdul Hameed Ali,Ali Mimhaad
345,05-Apr,20:00,3,Yoosuf Zubair,Ahmed Naizan Zameel
346,05-Apr,20:00,4,Uthusiyya Thaufeeg,Ahmed Faris Faroog
347,05-Apr,21:00,5,Aminath Azeema,Hassan Rajesh Moosa
348,05-Apr,21:00,6,Anas Mohamed,Hussain Sammaan
349,05-Apr,21:00,7,Hussain Hameem,Ali Wasif
350,05-Apr,21:00,8,Mohamed Sahin,Mohamed Hamdhoon
351,05-Apr,21:00,9,Ahmed Shareef Hussain,Ismail Razeen
352,05-Apr,21:00,10,Mamdhooh ibrahim,Mariyam Jasra Ahmed
353,05-Apr,21:00,11,Moosa Samiu,Ahmed Gasim
354,05-Apr,21:00,12,Fathimath Raufa Moh. Hafiz,Hussain Fayaz
355,05-Apr,21:00,1,Mikyaal Mohamed Miushad,Abdul Basith Abdul Samad
356,05-Apr,21:00,2,Aminath Azra,Aishath Ali
357,05-Apr,21:00,3,Eaman Moosa,Mohamed Shamikh Ibrahim
358,05-Apr,21:00,4,Ahmed Aleem,Ahmed Saeed
359,05-Apr,22:00,5,Mohamed Nabeeh,Abbas Saeed
360,05-Apr,22:00,6,Ahmed Munjid,Ibrahim Rasheed (IAS)
361,05-Apr,22:00,4,Hussain Rizam,Hussain Sajidhullah
362,05-Apr,22:00,1,Mohamed Hameem,Aiman Mohamed
363,05-Apr,22:00,2,Mohamed Shabuaan Shafeeg,Ismail Jeehan
364,05-Apr,22:00,3,Ismail Mumthaz,Hassan Mohamed`;

        // Parse matches into objects with formatted names
        const groupMatchData = groupStageCSV.split('\n').map(line => {
            const [id, date, time, table, p1Raw, p2Raw] = line.split(',');
            return {
                id,
                date,
                time,
                table,
                p1: rawToFormatted[p1Raw] || p1Raw,
                p2: rawToFormatted[p2Raw] || p2Raw,
                round: "GRP"
            };
        });
