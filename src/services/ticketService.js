const { createClient } = require('@supabase/supabase-js');
const TicketRepository = require('../repositories/ticketRepositories');

// Configuración de Supabase
const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
);

class TicketService {
    obtenerTicketsDeEmpleado = async (id) => {
        try {
            const repo = new TicketRepository();
            const tickets = await repo.obtenerTicketsDeEmpleado(id);
            return tickets;
        } catch (error) {
            throw new Error(`Error al obtener tickets del empleado: ${error.message}`);
        }
    }
    obtenerTicketsSinResolverDeEmpleado = async (id) => {
        try {
            const repo = new TicketRepository();
            const tickets = await repo.obtenerTicketsSinResolverDeEmpleado(id);
            return tickets;
        } catch (error) {
            throw new Error(`Error al obtener tickets del empleado: ${error.message}`);
        }
    }
    obtenerTicketsResueltosDeEmpleado = async (id) => {
        try {
            const repo = new TicketRepository();
            const tickets = await repo.obtenerTicketsResueltosDeEmpleado(id);
            return tickets;
        } catch (error) {
            throw new Error(`Error al obtener tickets del empleado: ${error.message}`);
        }
    }
    obtenerTicketsVencenHoyDeEmpleado = async (id) => {
        try {
            const repo = new TicketRepository();
            const tickets = await repo.obtenerTicketsVencenHoyDeEmpleado(id);
            return tickets;
        } catch (error) {
            throw new Error(`Error al obtener tickets del empleado: ${error.message}`);
        }
    }
    obtenerFeedbackDeEmpleado = async(id) => {
        try{
            const repo = new TicketRepository();
            const tickets = await repo.obtenerFeedbackDeEmpleado(id);
            return tickets;
        }
        catch(error) {
            throw new Error(`Error al obtener tickets del empleado: ${error.message}`);
        }
    }
    obtenerPorcentajeTicketsResueltos = async(id) => {
        try{
            const repo = new TicketRepository();
            const tickets = await repo.obtenerPorcentajeTicketsResueltos(id);
            return tickets;
        }
        catch(error) {
            throw new Error(`Error al obtener porcentaje de los tickets: ${error.message}`);
        }
    }
    obtenerDetalleDeTicketDeEmpleado = async (id) => {
        try {
            const repo = new TicketRepository();
            const ticketDetail = await repo.obtenerDetalleDeTicketDeEmpleado(id);
            return ticketDetail;
        } catch (error) {
            throw new Error(`Error al obtener detalle del ticket del empleado: ${error.message}`);
        }
    }
    async obtenerTicketsPorDiaDeLaSemana(id) {
        try {
            const repo = new TicketRepository();
            const ticketsPorDia = await repo.obtenerTicketsPorDiaDeLaSemana(id);
            return ticketsPorDia;
        } catch (error) {
            throw new Error(`Error al obtener tickets por día de la semana: ${error.message}`);
        }
    }
    async obtenerTicketsResueltosPorDiaDeLaSemana(id) {
        try {
            const repo = new TicketRepository();
            const ticketsPorDia = await repo.obtenerTicketsResueltosPorDiaDeLaSemana(id);
            return ticketsPorDia;
        } catch (error) {
            throw new Error(`Error al obtener tickets resueltos por día de la semana: ${error.message}`);
        }
    }
    async obtenerCantidadTicketsPorPrioridad(id) {
        try {
            const repo = new TicketRepository();
            const cantidadTicketsPorPrioridad = await repo.obtenerCantidadTicketsPorPrioridad(id);
            return cantidadTicketsPorPrioridad;
        } catch (error) {
            throw new Error(`Error al obtener la cantidad de tickets por prioridad: ${error.message}`);
        }
    }
    async obtenerPorcentajeTicketsPorEstado(id) {
        try {
            const repo = new TicketRepository();
            const porcentajeTicketsPorEstado = await repo.obtenerPorcentajeTicketsPorEstado(id);
            return porcentajeTicketsPorEstado;
        } catch (error) {
            throw new Error(`Error al obtener el porcentaje de tickets por estado: ${error.message}`);
        }
    }
    async obtenerCantidadTicketsPorTipo(id) {
        try {
            const repo = new TicketRepository();
            const cantidadTicketsPorTipo = await repo.obtenerCantidadTicketsPorTipo(id);
            return cantidadTicketsPorTipo;
        } catch (error) {
            throw new Error(`Error al obtener la cantidad de tickets por tipo: ${error.message}`);
        }
    }
    async obtenerCalificacionesPorUsuario(id) {
        try {
            const repo = new TicketRepository();
            const calificacionesPorUsuario = await repo.obtenerCalificacionesPorUsuario(id);
            return calificacionesPorUsuario;
        } catch (error) {
            throw new Error(`Hubo un error al obtener la cantidad de calificaciones por usuario: ${error.message}`);
        }
    }
    async agregarRecordatorio(texto, fkusuario) {
        try {
            const repo = new TicketRepository();
            const resultado = await repo.agregarRecordatorio(texto, fkusuario);
            return resultado;
        } catch (error) {
            throw new Error(`Error al agregar recordatorio: ${error.message}`);
        }
    }


    // Obtener los recordatorios de un usuario
    obtenerRecordatorios = async (fkusuario) => {
        try {
            const repo = new TicketRepository();
            const recordatorios = await repo.obtenerRecordatorios(fkusuario);
            return recordatorios;
        } catch (error) {
            throw new Error(`Error al obtener recordatorios: ${error.message}`);
        }
    }

    // Eliminar un recordatorio
    eliminarRecordatorio = async (id) => {
        try {
            const repo = new TicketRepository();
            const resultado = await repo.eliminarRecordatorio(id);
            return resultado;
        } catch (error) {
            throw new Error(`Error al eliminar recordatorio: ${error.message}`);
        }
    }
    obtenerEmpresasClientesPorUsuario = async (idUsuario) => {
        try {
            const repo = new TicketRepository();
            const empresas = await repo.obtenerEmpresasClientesPorUsuario(idUsuario);
            return empresas;
        } catch (error) {
            throw new Error(`Error al obtener las empresas clientes del usuario: ${error.message}`);
        }
    }
    obtenerEmpleadosYTicketsPorUsuario = async (idUsuario) => {
        try {
            const repo = new TicketRepository();
            const empleados = await repo.obtenerEmpleadosYTicketsPorUsuario(idUsuario);
            return empleados;
        } catch (error) {
            throw new Error(`Error al obtener los empleados y sus tickets: ${error.message}`);
        }
    }

    crearTicket = async (asunto, mensaje, idCliente, idEmpresa, tipo, prioridad) => {
        try {
            const repo = new TicketRepository();
            const resultado = await repo.crearTicket(asunto, mensaje, idCliente, idEmpresa, tipo, prioridad);
            return resultado;
        } catch (error) {
            throw new Error(`Error al crear ticket: ${error.message}`);
        }
    }

    responderTicket = async (idTicket, mensaje, idUsuario, esEmpleado) => {
        try {
            if (!idTicket) {
                throw new Error("idTicket es requerido");
            }
            const repo = new TicketRepository();
            const resultado = await repo.responderTicket(idTicket, mensaje, idUsuario, esEmpleado);
            return resultado;
        } catch (error) {
            throw new Error(`Error al responder ticket: ${error.message}`);
        }
    }
    async obtenerMensajesDeTicket(idTicket) {
        try {
            const repo = new TicketRepository();
            const mensajes = await repo.obtenerMensajesDeTicket(idTicket);
            return mensajes;
        } catch (error) {
            throw new Error(`Error al obtener mensajes del ticket: ${error.message}`);
        }
    }

    async enviarMensaje(idTicket, userId, contenido, isEmployee, archivo) {
        try {
            console.log('Datos en servicio:', {
                idTicket,
                userId,
                contenido,
                isEmployee,
                tieneArchivo: !!archivo
            });

            const repo = new TicketRepository();
            const mensaje = await repo.enviarMensaje(idTicket, userId, contenido, isEmployee, archivo);
            return mensaje;
        } catch (error) {
            console.error('Error en servicio enviarMensaje:', error);
            throw new Error(`Error al enviar mensaje: ${error.message}`);
        }
    }

    async cerrarTicket(idTicket) {
        try {
            const repo = new TicketRepository();
            const ticket = await repo.cerrarTicket(idTicket);
            
            if (!ticket) {
                throw new Error('No se pudo cerrar el ticket');
            }

            return {
                success: true,
                ticket
            };
        } catch (error) {
            console.error('Error en cerrarTicket:', error);
            throw error;
        }
    }

    async obtenerTicket(id) {
        try {
            const repo = new TicketRepository();
            const ticket = await repo.obtenerTicket(id);
            if (!ticket) {
                throw new Error("Ticket no encontrado");
            }
            return ticket;
        } catch (error) {
            console.error(`Servicio: Error al obtener ticket ${id}:`, error);
            throw error;
        }
    }

    async obtenerInformacionCompletaDeTicket(id) {
        try {
            const repo = new TicketRepository();
            const ticketInfo = await repo.obtenerInformacionCompletaDeTicket(id);
            return ticketInfo;
        } catch (error) {
            throw new Error(`Error al obtener información completa del ticket: ${error.message}`);
        }
    }

    obtenerTicketsDeCliente = async (id) => {
        try {
            const repo = new TicketRepository();
            const tickets = await repo.obtenerTicketsDeCliente(id);
            return tickets;
        } catch (error) {
            throw new Error(`Error al obtener tickets del cliente: ${error.message}`);
        }
    }

    obtenerEquipoCliente = async (idCliente) => {
        try {
            const repo = new TicketRepository();
            const equipo = await repo.obtenerEquipoCliente(idCliente);
            return equipo;
        } catch (error) {
            throw new Error(`Error al obtener equipo del cliente: ${error.message}`);
        }
    }

    obtenerTotalTicketsCliente = async (id) => {
        try {
            const repo = new TicketRepository();
            const total = await repo.obtenerTotalTicketsCliente(id);
            return total;
        } catch (error) {
            throw new Error(`Error al obtener total de tickets: ${error.message}`);
        }
    }

    obtenerTicketsPorEstadoCliente = async (id) => {
        try {
            const repo = new TicketRepository();
            const distribucion = await repo.obtenerTicketsPorEstadoCliente(id);
            return distribucion;
        } catch (error) {
            throw new Error(`Error al obtener distribución por estado: ${error.message}`);
        }
    }

    obtenerTicketsPorPrioridadCliente = async (id) => {
        try {
            const repo = new TicketRepository();
            const distribucion = await repo.obtenerTicketsPorPrioridadCliente(id);
            return distribucion;
        } catch (error) {
            throw new Error(`Error al obtener distribución por prioridad: ${error.message}`);
        }
    }

    obtenerTiempoPromedioResolucionCliente = async (id) => {
        try {
            const repo = new TicketRepository();
            const promedio = await repo.obtenerTiempoPromedioResolucionCliente(id);
            return promedio;
        } catch (error) {
            throw new Error(`Error al obtener tiempo promedio: ${error.message}`);
        }
    }

    obtenerTicketsPorTipoCliente = async (id) => {
        try {
            const repo = new TicketRepository();
            const distribucion = await repo.obtenerTicketsPorTipoCliente(id);
            return distribucion;
        } catch (error) {
            throw new Error(`Error al obtener distribución por tipo: ${error.message}`);
        }
    }

    obtenerTendenciaSemanalCliente = async (id) => {
        try {
            const repo = new TicketRepository();
            const tendencia = await repo.obtenerTendenciaSemanalCliente(id);
            return tendencia;
        } catch (error) {
            throw new Error(`Error al obtener tendencia semanal: ${error.message}`);
        }
    }

    async obtenerTicketsPorMesCliente(id) {
        try {
            const repo = new TicketRepository();
            const ticketsPorMes = await repo.obtenerTicketsPorMesCliente(id);
            return ticketsPorMes;
        } catch (error) {
            throw new Error(`Error en servicio obtenerTicketsPorMesCliente: ${error.message}`);
        }
    }

    async agregarCalificacion(idTicket, idUsuario, puntaje) {
        try {
            const repo = new TicketRepository();
            return await repo.agregarCalificacion(idTicket, idUsuario, puntaje);
        } catch (error) {
            throw new Error(`Error al agregar calificación: ${error.message}`);
        }
    }

    async verificarTicketCalificado(idTicket) {
        try {
            const repo = new TicketRepository();
            return await repo.verificarTicketCalificado(idTicket);
        } catch (error) {
            throw new Error(`Error al verificar calificación del ticket: ${error.message}`);
        }
    }
    
    async obtenerMensajeConDetalles(mensajeId) {
        try {
            const repo = new TicketRepository();
            const mensaje = await repo.obtenerMensajeConDetalles(mensajeId);
            return mensaje;
        } catch (error) {
            throw new Error(`Error al obtener detalles del mensaje: ${error.message}`);
        }
    }

    async obtenerEstadisticasTickets(id) {
        try {
            const repo = new TicketRepository();
            const estadisticas = await repo.obtenerEstadisticasTickets(id);
            return estadisticas;
        } catch (error) {
            throw new Error(`Error al obtener estadísticas de tickets: ${error.message}`);
        }
    }

    async crearNotificacion(idUsuario, tipo, contenido, idTicket) {
        try {
            const repo = new TicketRepository();
            return await repo.crearNotificacion(idUsuario, tipo, contenido, idTicket);
        } catch (error) {
            throw new Error(`Error al crear notificación: ${error.message}`);
        }
    }

    async obtenerNotificaciones(idUsuario) {
        try {
            const repo = new TicketRepository();
            return await repo.obtenerNotificaciones(idUsuario);
        } catch (error) {
            throw new Error(`Error al obtener notificaciones: ${error.message}`);
        }
    }

    async marcarNotificacionComoLeida(idNotificacion) {
        try {
            const repo = new TicketRepository();
            await repo.marcarNotificacionComoLeida(idNotificacion);
        } catch (error) {
            throw new Error(`Error al marcar notificación como leída: ${error.message}`);
        }
    }

    obtenerTicketsEsperandoRespuesta = async (id) => {
        try {
            const repo = new TicketRepository();
            const tickets = await repo.obtenerTicketsEsperandoRespuesta(id);
            return tickets;
        } catch (error) {
            throw new Error(`Error al obtener tickets esperando respuesta: ${error.message}`);
        }
    }

    async obtenerNotificacionesYRecordatorios(idUsuario) {
        try {
            const repo = new TicketRepository();
            return await repo.obtenerNotificacionesYRecordatorios(idUsuario);
        } catch (error) {
            throw new Error(`Error al obtener notificaciones y recordatorios: ${error.message}`);
        }
    }
}

module.exports = TicketService;