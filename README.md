# SpaceShooter

Live Version @ : https://stud.hosted.hr.nl/0917863/SpaceShooter

Installation Manual :

#1  Download the Files

#2  Give the files a location on your computer

#3  Open the index.html file locally to play the game
    
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

