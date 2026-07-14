import Toast from './Toast.vue';
import { ToastService, useToast } from './toast.service';
import { withInstall } from '../../utils/with-install';

export const BToast = withInstall(Toast);
export { ToastService, useToast };
export default BToast;

export * from './toast.props';