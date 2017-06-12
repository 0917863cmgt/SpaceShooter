# SpaceShooter

<<<<<<< HEAD
Live Version @ : https://stud.hosted.hr.nl/0917863/SpaceShooter

=======
>>>>>>> 50fb2e28fc0815d2ead39bcf4064362447221631
Installation Manual :

#1  Download the Files

#2  Give the files a location on your computer

#3  Open the index.html file locally to play the game
<<<<<<< HEAD
    
    If u want u can upload the game to your server, this will enable u to find and play te game online.
    For this u need to copy the folder to the server.

---------------------------------------------------------------------------

Lijst Werkende Classes / Interface / Abstract:

Game (class)

Spaceship (class)

Behaviour (interface)

Engine (class)
Braking (class)
Afterburner (class) / Warp Drive




---------------------------------------------------------------------------

Pragramming Principles :

The classes of reference are defined in each category
In the categories where '->' signs are mentioned, i try to define te reference between classes ordered from parent to child.


Interface :                 Behaviour (interface);

Static Utility Method :     GameObject (class);

Singleton :                 GameObject (class);

Strategy :                  Behaviour (interface) -> Engine (class) + Brake (class) + Reverse (class) + Afterburner (class)                            + Shooting (class) + Driving (class);


Encapsulation :     Player (class) -> Spaceship (class) -> Laser (class);

Composition :   Player (class) -> Spaceship (class) -> Laser (class)   +   Enemies (class) -> Player (class) -> Spaceship                   (class) -> Laser (class)

Inheritance :   Enemie (class) inherits from Player (class)

=======
    If u want u can upload the game to your server, this will enable u to find and play te game online.
    For this u need to copy the folder to the server.
>>>>>>> 50fb2e28fc0815d2ead39bcf4064362447221631

### Beoordeling door Bas Lokerman | 0912030

### Interface

Hij gebruikt een interface om verschillende acties van de auto uit te voeren. Hier heb ik niks op aan te geven. 

### Static Utility Method

Hij gaat een GameObject gebruiken als Static class. Deze is nog niet toegevoegd. Je kan ook een Utils class maken met collision en deze als static utility method gebruiken. Zo kun je bijvoorbeeld kijken of de lazer met enemies collision heeft.

### Singleton

Nog geen Singleton gebruikt. Hij wil dit gebruiken in GameObject. Mischien kan je beter Game als singleton maken zodat je daar mischien een gameOver() functie kan maken en die in andere classes kan gebruiken. Ik zag bij de classes dat je dat wou gaan doen maar je had het nog niet gebruikt.

### Strategy

Hij heeft verschillende behaviours juist gebruikt en werken ook in de game. Gebruikt veel verschillende behaviours.

### Encapsulation

Hij maakt gebruik van encapsulation. Hij gebruikt private en public variables. Niks om op aan te merken.

### Composition

Hij maakt gebruik van composition. Game heeft een Car en Car heeft een wheel. Dit is goed gebruikt

### Inheritance

Hij wil enemie class van player laten erven. Dit zit er nog niet in. Braking, driving, crashing, jumping, shooting etc erven wel van behaviour

### Beoordeling

Singleton nog niet goed toegepast maar hij weet wel waar en hoe hij dit wil gebruiken verder voldoet hij aan de criteria. Leuke effecten, goede uml en heeft er tijd in gestopt dus daarom een voldoende.

### Voldoende

### Pull request

Van game een singleton gemaakt en de animation stop vervangen door Game.getInstance().gameOver(); 