const message = require('../../locales/en');

module.exports = swaggerJson => {
    swaggerJson.paths['/contacts'] = {
        post: {
            security: [{
                bearerAuth: []
            }],
            tags: [
                'Contact'
            ],
            description: 'Add contact details',
            summary: 'Add contact details',
            parameters: [{
                in: 'body',
                name: 'body',
                description: 'Add contact details',
                required: true,
                schema: {
                    $ref: '#/definitions/addContact'
                }
            }],
            responses: {
                200: {
                    description: 'Add Contact',
                    schema: {
                        $ref: '#/definitions/successAddContact'
                    }
                },
                400: {
                    description: 'Invalid request',
                    schema: {
                        $ref: '#/definitions/validationError'
                    }
                },
                401: {
                    description: 'Unauthorized Access',
                    schema: {
                        $ref: '#/definitions/unauthorisedAccess'
                    }
                },
                500: {
                    description: 'Something went wrong. Try again.',
                    schema: {
                        $ref: '#/definitions/unexpextedError'
                    }
                }
            }
        },
        put: {
            security: [{
                bearerAuth: []
            }],
            tags: [
                'Contact'
            ],
            description: 'Edit contact details',
            summary: 'Edit contact details',
            parameters: [{
                in: 'body',
                name: 'body',
                description: 'Edit contact details',
                required: true,
                schema: {
                    $ref: '#/definitions/editContact'
                }
            }],
            responses: {
                200: {
                    description: 'Edit contact',
                    schema: {
                        $ref: '#/definitions/successEditContact'
                    }
                },
                400: {
                    description: 'Invalid request',
                    schema: {
                        $ref: '#/definitions/validationError'
                    }
                },
                401: {
                    description: 'Unauthorized Access',
                    schema: {
                        $ref: '#/definitions/unauthorisedAccess'
                    }
                },
                500: {
                    description: 'Something went wrong. Try again.',
                    schema: {
                        $ref: '#/definitions/unexpextedError'
                    }
                }
            }
        },
        delete: {
            security: [{
                bearerAuth: []
            }],
            tags: [
                'Contact'
            ],
            description: 'Delete contact',
            summary: 'Delete contact',
            parameters: [{
                in: 'body',
                name: 'body',
                description: 'Delete contact',
                required: true,
                schema: {
                    $ref: '#/definitions/deleteContact'
                }
            }],
            responses: {
                200: {
                    description: 'Delete contact',
                    schema: {
                        $ref: '#/definitions/successDeleteContact'
                    }
                },
                400: {
                    description: 'Invalid request',
                    schema: {
                        $ref: '#/definitions/validationError'
                    }
                },
                401: {
                    description: 'Unauthorized Access',
                    schema: {
                        $ref: '#/definitions/unauthorisedAccess'
                    }
                },
                500: {
                    description: 'Something went wrong. Try again.',
                    schema: {
                        $ref: '#/definitions/unexpextedError'
                    }
                }
            }
        }
    };

    swaggerJson.definitions.unexpextedError = {
        properties: {
            status: {
                type: 'number',
                example: 0
            },
            message: {
                example: message.ERROR_MSG
            }
        }
    };

    swaggerJson.definitions.validationError = {
        properties: {
            status: {
                type: 'number',
                example: 0
            },
            message: {
                example: message.INVALID_REQUEST
            }
        }
    };

    swaggerJson.definitions.unauthorisedAccess = {
        properties: {
            status: {
                type: 'number',
                example: 0
            },
            message: {
                example: message.ACCESS_DENIED
            }
        }
    };

    swaggerJson.definitions.addContact = {
        type: 'object',
        properties: {
            firstName: {
                type: 'string',
                example: 'First'
            },
            lastName: {
                type: 'string',
                example: 'Last'
            },
            Phone: {
                type: 'string',
                example: '9898989898'
            }
        }
    };

    swaggerJson.definitions.editContact = {
        type: 'object',
        properties: {
            id: {
                type: 'string',
                example: 'id of the contact'
            },
            firstName: {
                type: 'string',
                example: 'First'
            },
            lastName: {
                type: 'string',
                example: 'Last'
            },
            Phone: {
                type: 'string',
                example: '9898989898'
            }
        }
    };

    swaggerJson.definitions.deleteContact = {
        type: 'object',
        properties: {
            id: {
                type: 'string',
                example: 'id of contact'
            }
        }
    };

    swaggerJson.definitions.successAddContact = {
        properties: {
            status: {
                type: 'number',
                example: 1
            },
            data: {
                type: 'object',
                example: {
                    _id: '605e1e14e69cd416e5f6064d',
                    firstName: 'First',
                    lastName: 'Last',
                    Phone: '9898989898'
                }
            },
            message: {
                example: message.SUCCESS
            }
        }
    };

    swaggerJson.definitions.successEditContact = {
        properties: {
            status: {
                type: 'number',
                example: 1
            },
            data: {
                type: 'object',
                example: {
                    _id: '605e1e14e69cd416e5f6064d',
                    firstName: 'First',
                    lastName: 'Last',
                    Phone: '9898989898'
                }
            },
            message: {
                example: message.SUCCESS
            }
        }
    };

    swaggerJson.definitions.successDeleteContact = {
        properties: {
            status: {
                type: 'number',
                example: 1
            },
            message: {
                example: message.SUCCESS
            }
        }
    };

    return swaggerJson;
};
