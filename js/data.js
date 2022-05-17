const routers = {
    'TP-Link': {
      0 : 'Archer C7',
      1: 'Archer C80',
      2 : 'Archer AX10',
      3 : 'Archer AX50',
      4 : 'Archer C9',
      5 : 'Archer AX6000',
      6 : 'Deco P9',
      7 : 'Deco X20',
      8 : 'Deco M4'
    },
    'Tenda': {
      0 : 'AC10',
      1: 'RX3 WiFi 6'
    },
    'Asus': {
      0 : 'RT-AC53',
      1: 'RT-AC85P',
      2 : 'RT-AX55',
      3 : 'RT-AC86U',
      4 : 'RT-AX82U',
      5 : 'RT-AX92U',
      6 : 'RT-AX86U',
      7 : 'ROG Rapture GT-AC5300',
      8 : 'RT-AX88U',
      9 : 'RT-AX89X',
      10 : 'GT-AX11000',
      11 : 'ZenWifi CD6',
      12 : 'ZenWifi AX Mini (XD4)',
      13 : 'ZenWifi XT8'
    },
    'HONOR': {
      0 : 'Router 3 WiFi 6'
    },
    'Netgear': {
      0 : 'R6400',
      1: 'Nighthawk X6 (R8000)',
      2: 'R7800 Nighthawk X4S',
      3: 'RAX50',
      4: 'AX6000 RAX80',
      5: 'Orbi Mesh WiFi 6 RBK352',
      6: 'Orbi AC3000 RBK50',
      7: 'Orbi Mesh WiFi 6 RBK752'
    },
    'Xiaomi': {
      0 : 'AX3600'
    },
    'Linksys': {
      0 : 'MR7350',
      1: 'EA6900',
      2: 'MR9600'
    },
    'D-Link': {
      0 : 'DIR-882'
    }
  };
  window.localStorage.setItem('routers',JSON.stringify(routers));
  