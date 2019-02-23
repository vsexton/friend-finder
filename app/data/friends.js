// Data structure that will store the friends data
var friendsArray = [
	{
		name: 'Mickey',
		photo: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiN2YfyhdHgAhWnsVQKHSvBAgQQjRx6BAgBEAU&url=https%3A%2F%2Fwww.eonline.com%2Fnews%2F810527%2Fhappy-birthday-mickey-10-facts-you-might-not-know-about-the-famous-mouse&psig=AOvVaw2bH--I93PTTnc5TtHJl9G3&ust=1550983488994365',
		scores: [
			'1',
			'5',
			'5',
			'1',
			'5',
			'5',
			'1',
			'1',
			'1',
			'5'
		]
	},
	{
		name: 'Pluto',
		photo: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwil8_SNhtHgAhUCB3wKHbVVCqcQjRx6BAgBEAU&url=https%3A%2F%2Fwww.collectors.com%2Fentertainment-item%2Fpluto-disney-mickey-mouse-cartoon-dog-cardboard-cutout-stan%2F4313476438542890234&psig=AOvVaw2VzohSTecPYgrCjN7_auKt&ust=1550983545526230',
		scores: [
			'2',
			'4',
			'1',
			'1',
			'1',
			'1',
			'1',
			'2',
			'1',
			'5'
		]
	},
	{
		name: 'Minnie',
		photo: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi0ia6shtHgAhWEMXwKHVjCD30QjRx6BAgBEAU&url=https%3A%2F%2Feconomictimes.indiatimes.com%2Fmagazines%2Fpanache%2F90th-birthday-present-minnie-mouse-to-get-her-own-star-on-hollywood-walk-of-fame%2Farticleshow%2F62471080.cms&psig=AOvVaw2q9iHMrO-PJeIOpHSby2Bz&ust=1550983603609899',
		scores: [
			'4',
			'3',
			'5',
			'1',
			'1',
			'5',
			'5',
			'1',
			'1',
			'1'
		]
	},
	{
		name: 'Daisy',
		photo: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi2vvDVhtHgAhUnr1QKHa3XC2gQjRx6BAgBEAU&url=https%3A%2F%2Fwww.homedepot.com%2Fp%2FRoomMates-5-in-x-19-in-Mickey-and-Friends-Daisy-Duck-8-Piece-Peel-and-Stick-Giant-Wall-Decal-RMK1513GM%2F202984819&psig=AOvVaw0OmEcDNDDd16Iy0waiN4Sv&ust=1550983664553694',
		scores: [
			'5',
			'1',
			'2',
			'1',
			'3',
			'4',
			'1',
			'3',
			'3',
			'4'
		]
	},
	{
		name: 'Donald',
		photo: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiDy5a3i9HgAhXBy1QKHUr2AzwQjRx6BAgBEAU&url=https%3A%2F%2Fwww.orlandoweekly.com%2FBlogs%2Farchives%2F2014%2F06%2F09%2Fhappy-birthday-donald-duck&psig=AOvVaw0kIk4sPXEPD-qAogaOZYVO&ust=1550984439136203',
		scores: [
			'1',
			'1',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'1'
		]
	},
	{
		name: 'Goofy',
		photo: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjm4-Dsi9HgAhXHxlQKHdHpCM8QjRx6BAgBEAU&url=https%3A%2F%2Fwww.homedepot.com%2Fp%2FRoomMates-5-in-19-in-Mickey-and-Friends-Goofy-13-Piece-Peel-and-Stick-Giant-Wall-Decal-RMK1510GM%2F202984813&psig=AOvVaw1qngWwODWRDe-EIkZFpkXT&ust=1550985089710408',
		scores: [
			'1',
			'1',
			'5',
			'1',
			'3',
			'2',
			'5',
			'1',
			'1',
			'5'
		]
	},
	{
		name: 'Pete',
		photo: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj-9uSDjNHgAhWQ51QKHY6PAhkQjRx6BAgBEAU&url=https%3A%2F%2Falchetron.com%2FPete-(Disney)&psig=AOvVaw0oJCw7VRppjJqxC5KpyPog&ust=1550985135913512',
		scores: [
			'5',
			'4',
			'4',
			'2',
			'4',
			'4',
			'3',
			'2',
			'3',
			'3'
		]
	},
	{
		name: 'Ludwig Von Drake',
		photo: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjgvOiljNHgAhUC_1QKHT9NDkgQjRx6BAgBEAU&url=https%3A%2F%2Fdisney.fandom.com%2Fwiki%2FLudwig_Von_Drake&psig=AOvVaw2WJcSjimpjvCJ6FVLv_ZvN&ust=1550985209349096',
		scores: [
			'5',
			'2',
			'3',
			'1',
			'5',
			'1',
			'3',
			'1',
			'1',
			'5'
		]
	},
	{
		name: 'Clarabelle Cow',
		photo: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiM_9PBjNHgAhUPDHwKHWtFCMcQjRx6BAgBEAU&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FClarabelle_Cow&psig=AOvVaw0pVgdT4MDLZQuuGGgKEdjc&ust=1550985248892718',
		scores: [
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5'
		]
	},
	{
		name: 'Chip and Dale',
		photo: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjFpfvVjNHgAhWpsVQKHU-QDToQjRx6BAgBEAU&url=https%3A%2F%2Fdisney.fandom.com%2Fwiki%2FChip_and_Dale&psig=AOvVaw3hYG_m5SoItdARLuNmYv34&ust=1550985302724366',
		scores: [
			'1',
			'1',
			'1',
			'1',
			'1',
			'1',
			'1',
			'1',
			'1',
			'1'
		]
	}
];

module.exports = friendsArray;