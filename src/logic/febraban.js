const RECORDS = {
    A: {
        fields: [
            {
                start: 1,
                length: 1,
                description: "Código do registro"
            },
            {
                start: 2,
                length: 1,
                description: "Código de remessa"
            },
            {
                start: 3,
                length: 20,
                description: "Código do convênio"
            },
            {
                start: 23,
                length: 20,
                description: "Nome da empresa"
            },
            {
                start: 43,
                length: 3,
                description: "Código do banco"
            },
            {
                start: 46,
                length: 20,
                description: "Nome do banco"
            },
            {
                start: 66,
                length: 8,
                description: "Data de geração"
            },
            {
                start: 74,
                length: 6,
                description: "NSA"
            },
            {
                start: 80,
                length: 2,
                description: "Versão do layout"
            },
            {
                start: 82,
                length: 17,
                description: "Identificação do serviço"
            },
            {
                start: 99,
                length: 52,
                description: "Reservado para o futuro"
            }
        ]
    },
    B: {
        fields: [
            {
                start: 1,
                length: 1,
                description: "Código do registro"
            },
            {
                start: 2,
                length: 25,
                description: "Identificação do cliente na empresa"
            },
            {
                start: 27,
                length: 4,
                description: "Agência para débito"
            },
            {
                start: 31,
                length: 14,
                description: "Identificação do cliente no banco"
            },
            {
                start: 45,
                length: 8,
                description: "Data da opção/exclusão"
            },
            {
                start: 53,
                length: 97,
                description: "Reservado para o futuro"
            },
            {
                start: 150,
                length: 1,
                description: "Código do movimento"
            }
        ]
    },
    C: {
        fields: [
            {
                start: 1,
                length: 1,
                description: "Código do registro"
            },
            {
                start: 2,
                length: 25,
                description: "Identificação do cliente na empresa"
            },
            {
                start: 27,
                length: 4,
                description: "Agência para débito"
            },
            {
                start: 31,
                length: 14,
                description: "Identificação do cliente no banco"
            },
            {
                start: 45,
                length: 40,
                description: "Ocorrência 1"
            },
            {
                start: 85,
                length: 40,
                description: "Ocorrência 2"
            },
            {
                start: 125,
                length: 25,
                description: "Reservado para o futuro"
            },
            {
                start: 150,
                length: 1,
                description: "Código do movimento"
            }
        ]
    },
    D: {
        fields: [
            {
                start: 1,
                length: 1,
                description: "Código do registro"
            },
            {
                start: 2,
                length: 25,
                description: "Identificação do cliente na empresa - anterior"
            },
            {
                start: 27,
                length: 4,
                description: "Agência para débito"
            },
            {
                start: 31,
                length: 14,
                description: "Identificação do cliente no banco"
            },
            {
                start: 45,
                length: 25,
                description: "Identificação do cliente na empresa - atual"
            },
            {
                start: 70,
                length: 60,
                description: "Ocorrência"
            },
            {
                start: 130,
                length: 20,
                description: "Reservado para o futuro"
            },
            {
                start: 150,
                length: 1,
                description: "Código do movimento"
            }
        ]
    },
    E: {
        fields: [
            {
                start: 1,
                length: 1,
                description: "Código do registro"
            },
            {
                start: 2,
                length: 25,
                description: "Identificação do cliente na empresa"
            },
            {
                start: 27,
                length: 4,
                description: "Agência para débito"
            },
            {
                start: 31,
                length: 14,
                description: "Identificação do cliente no banco"
            },
            {
                start: 45,
                length: 8,
                description: "Data do vencimento"
            },
            {
                start: 53,
                length: 15,
                description: "Valor do débito"
            },
            {
                start: 68,
                length: 2,
                description: "Código da moeda"
            },
            {
                start: 70,
                length: 60,
                description: "Uso da empresa"
            },
            {
                start: 130,
                length: 20,
                description: "Reservado para o futuro"
            },
            {
                start: 150,
                length: 1,
                description: "Código do movimento"
            }
        ]
    },
    F: {
        fields: [
            {
                start: 1,
                length: 1,
                description: "Código do registro"
            },
            {
                start: 2,
                length: 25,
                description: "Identificação do cliente na empresa"
            },
            {
                start: 27,
                length: 4,
                description: "Agência para débito"
            },
            {
                start: 31,
                length: 14,
                description: "Identificação do cliente no banco"
            },
            {
                start: 45,
                length: 8,
                description: "Data do vencimento ou débito"
            },
            {
                start: 53,
                length: 15,
                description: "Valor original ou debitado"
            },
            {
                start: 68,
                length: 2,
                description: "Código de retorno"
            },
            {
                start: 70,
                length: 70,
                description: "Uso da empresa"
            },
            {
                start: 140,
                length: 10,
                description: "Reservado para o futuro"
            },
            {
                start: 150,
                length: 1,
                description: "Código do movimento"
            }
        ]
    },
    H: {
        fields: [
            {
                start: 1,
                length: 1,
                description: "Código do registro"
            },
            {
                start: 2,
                length: 25,
                description: "Identificação do cliente na empresa - anterior"
            },
            {
                start: 27,
                length: 4,
                description: "Agência para débito"
            },
            {
                start: 31,
                length: 14,
                description: "Identificação do cliente no banco"
            },
            {
                start: 45,
                length: 25,
                description: "Identificação do cliente na empresa - atual"
            },
            {
                start: 70,
                length: 58,
                description: "Ocorrência"
            },
            {
                start: 128,
                length: 22,
                description: "Reservado para o futuro"
            },
            {
                start: 150,
                length: 1,
                description: "Código do movimento"
            }
        ]
    },
    J: {
        fields: [
            {
                start: 1,
                length: 1,
                description: "Código do registro"
            },
            {
                start: 2,
                length: 6,
                description: "Número sequencia do arquivo (NSA) processado"
            },
            {
                start: 8,
                length: 8,
                description: "Data de geração do arquivo"
            },
            {
                start: 16,
                length: 6,
                description: "Total de registros no arquivo processado"
            },
            {
                start: 22,
                length: 17,
                description: "Valor total do arquivo processado"
            },
            {
                start: 39,
                length: 8,
                description: "Data de processamento do arquivo"
            },
            {
                start: 47,
                length: 104,
                description: "Reservado para o futuro"
            }
        ]
    },
    Z: {
        fields: [
            {
                start: 1,
                length: 1,
                description: "Código do registro"
            },
            {
                start: 2,
                length: 6,
                description: "Total de registros no arquivo"
            },
            {
                start: 8,
                length: 17,
                description: "Valor total de registros no arquivo"
            },
            {
                start: 25,
                length: 126,
                description: "Reservado para o futuro"
            }
        ]
    }
};

function parseRecord(line) {
    if (line.length != 150) {
        return { error: `Line should have 150 characters. Current ${line.length}` }
    }

    const recordType = line[0];
    const record = RECORDS[recordType];

    if (!record) {
        return { error: "Unknown type of record" };
    }

    return record.fields.reduce((acc, field) => ({
        ...acc,
        [field.description]: line.slice(field.start - 1, field.start - 1 + field.length).trim()
    }), {})
}

function previewFile(fileContent) {
    return JSON.stringify(
        fileContent.split(/\r?\n/)
            .reduce((acc, line) => {
                if (!line.trim()) {
                    return acc;
                }
                return [...acc, parseRecord(line)]
            }, [])
        , null, 4)
}

module.exports = {
    parseRecord,
    previewFile
}