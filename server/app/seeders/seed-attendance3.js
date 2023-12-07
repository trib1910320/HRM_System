'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Attendance', [
            {
                id: 133,
                attendanceDate: '2023-12-11',
                inTime: '07:53:08',
                inStatus: 'On Time',
                employeeId: 'NV20230001',
                shiftId: 1
            },
            {
                id: 134,
                attendanceDate: '2023-12-11',
                inTime: '07:58:30',
                inStatus: 'On Time',
                employeeId: 'NV20230002',
                shiftId: 1
            },
            {
                id: 135,
                attendanceDate: '2023-12-11',
                inTime: '07:57:33',
                inStatus: 'On Time',
                employeeId: 'NV20230003',
                shiftId: 1
            },
            {
                id: 136,
                attendanceDate: '2023-12-11',
                inTime: '07:58:03',
                inStatus: 'On Time',
                employeeId: 'NV20230004',
                shiftId: 1
            },
            {
                id: 137,
                attendanceDate: '2023-12-11',
                inTime: '07:57:11',
                inStatus: 'On Time',
                employeeId: 'NV20230005',
                shiftId: 1
            },
            {
                id: 138,
                attendanceDate: '2023-12-11',
                inTime: '07:58:50',
                inStatus: 'On Time',
                employeeId: 'NV20230006',
                shiftId: 1
            },
            {
                id: 139,
                attendanceDate: '2023-12-11',
                inTime: '12:58:32',
                inStatus: 'On Time',
                employeeId: 'NV20230001',
                shiftId: 2
            },
            {
                id: 140,
                attendanceDate: '2023-12-11',
                inTime: '12:58:59',
                inStatus: 'On Time',
                employeeId: 'NV20230002',
                shiftId: 2
            },
            {
                id: 141,
                attendanceDate: '2023-12-11',
                inTime: '12:58:48',
                inStatus: 'On Time',
                employeeId: 'NV20230003',
                shiftId: 2
            },
            {
                id: 142,
                attendanceDate: '2023-12-11',
                inTime: '12:57:52',
                inStatus: 'On Time',
                employeeId: 'NV20230004',
                shiftId: 2
            },
            {
                id: 143,
                attendanceDate: '2023-12-11',
                inTime: '12:55:09',
                inStatus: 'On Time',
                employeeId: 'NV20230005',
                shiftId: 2
            },
            {
                id: 144,
                attendanceDate: '2023-12-11',
                inTime: '12:57:40',
                inStatus: 'On Time',
                employeeId: 'NV20230006',
                shiftId: 2
            },
            {
                id: 145,
                attendanceDate: '2023-12-12',
                inTime: '07:57:08',
                inStatus: 'On Time',
                employeeId: 'NV20230001',
                shiftId: 1
            },
            {
                id: 146,
                attendanceDate: '2023-12-12',
                inTime: '07:58:43',
                inStatus: 'On Time',
                employeeId: 'NV20230002',
                shiftId: 1
            },
            {
                id: 147,
                attendanceDate: '2023-12-12',
                inTime: '07:55:33',
                inStatus: 'On Time',
                employeeId: 'NV20230003',
                shiftId: 1
            },
            {
                id: 148,
                attendanceDate: '2023-12-12',
                inTime: '07:58:03',
                inStatus: 'On Time',
                employeeId: 'NV20230004',
                shiftId: 1
            },
            {
                id: 149,
                attendanceDate: '2023-12-12',
                inTime: '07:57:23',
                inStatus: 'On Time',
                employeeId: 'NV20230005',
                shiftId: 1
            },
            {
                id: 150,
                attendanceDate: '2023-12-12',
                inTime: '07:59:11',
                inStatus: 'On Time',
                employeeId: 'NV20230006',
                shiftId: 1
            },
            {
                id: 151,
                attendanceDate: '2023-12-12',
                inTime: '12:57:37',
                inStatus: 'On Time',
                employeeId: 'NV20230001',
                shiftId: 2
            },
            {
                id: 152,
                attendanceDate: '2023-12-12',
                inTime: '12:56:57',
                inStatus: 'On Time',
                employeeId: 'NV20230002',
                shiftId: 2
            },
            {
                id: 153,
                attendanceDate: '2023-12-12',
                inTime: '12:57:12',
                inStatus: 'On Time',
                employeeId: 'NV20230003',
                shiftId: 2
            },
            {
                id: 154,
                attendanceDate: '2023-12-12',
                inTime: '12:58:52',
                inStatus: 'On Time',
                employeeId: 'NV20230004',
                shiftId: 2
            },
            {
                id: 155,
                attendanceDate: '2023-12-12',
                inTime: '12:58:02',
                inStatus: 'On Time',
                employeeId: 'NV20230005',
                shiftId: 2
            },
            {
                id: 156,
                attendanceDate: '2023-12-12',
                inTime: '12:57:40',
                inStatus: 'On Time',
                employeeId: 'NV20230006',
                shiftId: 2
            },
            {
                id: 157,
                attendanceDate: '2023-12-13',
                inTime: '7:58:01',
                inStatus: 'On Time',
                employeeId: 'NV20230001',
                shiftId: 1
            },
            {
                id: 158,
                attendanceDate: '2023-12-13',
                inTime: '07:55:23',
                inStatus: 'On Time',
                employeeId: 'NV20230002',
                shiftId: 1
            },
            {
                id: 159,
                attendanceDate: '2023-12-13',
                inTime: '07:58:33',
                inStatus: 'On Time',
                employeeId: 'NV20230003',
                shiftId: 1
            },
            {
                id: 160,
                attendanceDate: '2023-12-13',
                inTime: '07:56:23',
                inStatus: 'On Time',
                employeeId: 'NV20230004',
                shiftId: 1
            },
            {
                id: 161,
                attendanceDate: '2023-12-13',
                inTime: '07:54:15',
                inStatus: 'On Time',
                employeeId: 'NV20230005',
                shiftId: 1
            },
            {
                id: 162,
                attendanceDate: '2023-12-13',
                inTime: '07:57:50',
                inStatus: 'On Time',
                employeeId: 'NV20230006',
                shiftId: 1
            },
            {
                id: 163,
                attendanceDate: '2023-12-13',
                inTime: '12:56:10',
                inStatus: 'On Time',
                employeeId: 'NV20230001',
                shiftId: 2
            },
            {
                id: 164,
                attendanceDate: '2023-12-13',
                inTime: '12:55:23',
                inStatus: 'On Time',
                employeeId: 'NV20230002',
                shiftId: 2
            },
            {
                id: 165,
                attendanceDate: '2023-12-13',
                inTime: '12:58:45',
                inStatus: 'On Time',
                employeeId: 'NV20230003',
                shiftId: 2
            },
            {
                id: 166,
                attendanceDate: '2023-12-13',
                inTime: '12:55:52',
                inStatus: 'On Time',
                employeeId: 'NV20230004',
                shiftId: 2
            },
            {
                id: 167,
                attendanceDate: '2023-12-13',
                inTime: '12:56:02',
                inStatus: 'On Time',
                employeeId: 'NV20230005',
                shiftId: 2
            },
            {
                id: 168,
                attendanceDate: '2023-12-13',
                inTime: '12:56:42',
                inStatus: 'On Time',
                employeeId: 'NV20230006',
                shiftId: 2
            },
        ], {

        });
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Attendance', null, {});
    }
};
