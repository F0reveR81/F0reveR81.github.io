var _0x17b0 = ['#b61924', 'no-repeat', 'cover', '#ffffff', 'repulse', 'push', 'out'];
var _0x36af = function(_0x17b0b5, _0x36afd8) {
    _0x17b0b5 = _0x17b0b5 - 0x0;
    var _0x4ee8f4 = _0x17b0[_0x17b0b5];
    return _0x4ee8f4;
};
particlesJS('particles-js', {
    'particles': {
        'number': {
            'value': 0x50,
            'density': {
                'enable': !![],
                'value_area': 0x320
            }
        },
        'color': {
            'value': '#ffffff'
        },
        'shape': {
            'type': 'circle',
            'stroke': {
                'width': 0x0,
                'color': '#000000'
            },
            'polygon': {
                'nb_sides': 0x5
            },
            'image': {
                'src': 'img/github.svg',
                'width': 0x64,
                'height': 0x64
            }
        },
        'opacity': {
            'value': 0.5,
            'random': ![],
            'anim': {
                'enable': ![],
                'speed': 0x1,
                'opacity_min': 0.1,
                'sync': ![]
            }
        },
        'size': {
            'value': 0x5,
            'random': !![],
            'anim': {
                'enable': ![],
                'speed': 0x28,
                'size_min': 0.1,
                'sync': ![]
            }
        },
        'line_linked': {
            'enable': !![],
            'distance': 0x96,
            'color': _0x36af('0x3'),
            'opacity': 0.4,
            'width': 0x1
        },
        'move': {
            'enable': !![],
            'speed': 0x6,
            'direction': 'none',
            'random': ![],
            'straight': ![],
            'out_mode': _0x36af('0x6'),
            'attract': {
                'enable': ![],
                'rotateX': 0x258,
                'rotateY': 0x4b0
            }
        }
    },
    'interactivity': {
        'detect_on': 'canvas',
        'events': {
            'onhover': {
                'enable': !![],
                'mode': _0x36af('0x4')
            },
            'onclick': {
                'enable': !![],
                'mode': _0x36af('0x5')
            },
            'resize': !![]
        },
        'modes': {
            'grab': {
                'distance': 0x190,
                'line_linked': {
                    'opacity': 0x1
                }
            },
            'bubble': {
                'distance': 0x190,
                'size': 0x28,
                'duration': 0x2,
                'opacity': 0x8,
                'speed': 0x3
            },
            'repulse': {
                'distance': 0xc8
            },
            'push': {
                'particles_nb': 0x4
            },
            'remove': {
                'particles_nb': 0x2
            }
        }
    },
    'retina_detect': !![],
    'config_demo': {
        'hide_card': ![],
        'background_color': _0x36af('0x0'),
        'background_image': '',
        'background_position': '50%\x2050%',
        'background_repeat': _0x36af('0x1'),
        'background_size': _0x36af('0x2')
    }
});
